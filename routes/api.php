<?php

use App\Models\Helper\MailHelper;
use App\Models\Helper\Response;
use App\Models\Helper\Validation;
use App\Models\Order;
use App\Models\Plugin;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminsController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\BrandsController;
use App\Http\Controllers\SubCategoriesController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\AttributesController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\FooterLinksController;
use App\Http\Controllers\FooterImageLinksController;
use App\Http\Controllers\HomeSlidersController;
use App\Http\Controllers\FlashSalesController;
use App\Http\Controllers\TagsController;
use App\Http\Controllers\TaxRulesController;
use App\Http\Controllers\ShippingRulesController;
use App\Http\Controllers\WysiwygImagesController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\ProductCollectionsController;
use App\Http\Controllers\VouchersController;
use App\Http\Controllers\BundleDealsController;
use App\Http\Controllers\CartsController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\RatingReviewsController;
use App\Http\Controllers\UserWishlistsController;
use App\Http\Controllers\PaymentsController;
use App\Http\Controllers\CancellationsController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\PageWysiwygImagesController;
use App\Http\Controllers\UpdatedInventoriesController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\WithdrawalAccountsController;
use App\Http\Controllers\WithdrawalsController;
use App\Http\Controllers\BannersController;
use App\Http\Controllers\SubscriptionEmailsController;
use App\Http\Controllers\SubscriptionEmailFormatsController;
use App\Http\Controllers\CompareListsController;
use App\Http\Controllers\InstallController;
use App\Http\Controllers\SiteSettingController;
use App\Http\Controllers\UserFollowStoreController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\IyzicoPaymentController;
use App\Http\Controllers\GuestUsersController;
use App\Http\Controllers\HeaderLinksController;
use App\Http\Controllers\BulkController;
use App\Http\Controllers\ImagesController;
use App\Http\Controllers\SellerController;
use App\Http\Controllers\SiteFeaturesController;
use App\Http\Controllers\FeatureWysiwygImageController;
use App\Http\Controllers\CustomScriptsController;
use App\Http\Controllers\ProductImageAttributesController;
use App\Http\Controllers\PosSettingsController;
use App\Http\Controllers\PosOrdersController;
use App\Http\Controllers\PluginsController;

use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Str;
use App\Http\Controllers\OffersController;
use App\Http\Controllers\OfferSchemasController;
use App\Http\Controllers\OfferMetasController;
use App\Http\Controllers\PaymentMethodsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/


Route::get('/clear-cache', function() {
    Artisan::call('config:cache');
    Artisan::call('config:clear');
    Artisan::call('route:cache');
    Artisan::call('route:clear ');
    Artisan::call('cache:clear');
    return "Cache is cleared";
});


Route::post('install', [InstallController::class, 'installPost']);
Route::post('check-db', [InstallController::class, 'checkDb']);
Route::get('fresh-migration', [InstallController::class, 'freshMigration']);
Route::get('create-user', [InstallController::class, 'createUser']);
Route::get('migration', [InstallController::class, 'migration']);
Route::get('update-env', [InstallController::class, 'updateEnv']);
Route::get('read-update-log', [InstallController::class, 'readUpdateLog']);
Route::get('deactivate', [AdminsController::class, "deactivate"]);

Route::get('/nefedfsrgw', function (\Illuminate\Http\Request $request) {

    $order = Order::with('ordered_products.product.product_categories')
        ->with('address')
        ->find(1);

    $mailDataLang = MailHelper::sendingOrderEmail($request, 1, 'hi');
    $mailData = MailHelper::sendingOrderEmail($request, 1);

    $mpdf = new \Mpdf\Mpdf();
    $mpdf->autoScriptToLang = true;
    $mpdf->autoLangToFont = true;

    $html = \Illuminate\Support\Facades\View::make('mail_templates.order_pdf', $mailDataLang)->render();
    $mpdf->WriteHTML($html);


    $html = View::make('mail_templates.order_pdf', $mailData)
        ->render();

    return $html;

    // Output the PDF to the browser or save it to a file
    return $mpdf->Output('document.pdf', 'I');



    $pdf = PDF::loadView('mail_templates.order_pdf', $mailDataLang);


    return $pdf->download('disney.pdf');


    // Set the appropriate headers for a downloadable PDF
    $headers = [
        'Content-Type' => 'application/pdf',
        'Content-Disposition' => 'attachment; filename="your_filename.pdf"',
    ];

    // Return the PDF as a downloadable response
    return response($pdf, 200, $headers);

    $basketItems = [];
    $totalAmount = $order->total_amount;
    foreach ($order->ordered_products as $op) {


        $BasketItem = new \Iyzipay\Model\BasketItem();
        $BasketItem->setId($op->product_id);
        $BasketItem->setName($op->product->title);

        if(count($op->product->product_categories) > 0) {

            $BasketItem->setCategory1($op->product->product_categories[0]->id);

        } else {
            $BasketItem->setCategory1("No category");
        }

        $price = ($op->selling * $op->quantity) + $op->tax_price + $op->shipping_price;

        $totalAmount -= $price;


        $BasketItem->setItemType(\Iyzipay\Model\BasketItemType::PHYSICAL);
        $BasketItem->setPrice($price);

        array_push($basketItems, $BasketItem);
    }

    return response()->json(new Response($order->total_amount, $basketItems));
});


Route::post('check-order', [OrdersController::class, 'checkOrder']);

Route::group([
    'prefix' => 'admin'
], function () {
    Route::post('login', [AdminsController::class, 'login']);
    Route::post('signup', [AdminsController::class, 'signup']);
    Route::post('forgot-password', [AdminsController::class, 'forgotPassword']);
    Route::post('verify-code', [AdminsController::class, 'verifyCode']);

    Route::get('languages', [LanguageController::class, "languages"]);
    Route::get('localization', [FrontendController::class, "localizationAdmin"]);
    Route::get('resource/{name}', [FrontendController::class, "resource"]);
    Route::get('countries-phones', [FrontendController::class, "countriesPhones"]);

    Route::group([
        'middleware' => ['auth:admin', 'scope:admin']
    ], function (){

        Route::get('deactivate', [AdminsController::class, "deactivate"]);
        Route::post('activate', [AdminsController::class, "activate"]);
        Route::post('manual-activation', [AdminsController::class, "manualActivation"]);
        Route::get('logout', [AdminsController::class, 'logout']);
        Route::get('profile', [AdminsController::class, 'profile']);
        Route::get('dashboard', [AdminsController::class, 'dashboard']);
        Route::get('order-statistic', [AdminsController::class, 'statistic']);
        Route::post('update', [AdminsController::class, 'update']);
        Route::post('update-password', [AdminsController::class, 'updatePassword']);

        Route::post('clear-cache', [AdminsController::class, 'clearCache']);

        Route::group([
            'prefix' => 'admin-data'
        ], function (){
            Route::get('all', [AdminsController::class, 'all']);
            Route::get('all-admins', [AdminsController::class, 'allAdmins']);
            Route::get('find/{id}', [AdminsController::class, 'find']);
            Route::post('action/{admin?}', [AdminsController::class, 'action']);
            Route::delete('delete/{id}', [AdminsController::class, 'delete']);
        });

        Route::group([
            'prefix' => 'bulk'
        ], function (){
            Route::get('export', [BulkController::class, 'exportData']);
            Route::post('import', [BulkController::class, 'importData']);
        });

        Route::group([
            'prefix' => 'plugin'
        ], function (){
            Route::get('all', [PluginsController::class, 'all']);
            Route::post('activate', [PluginsController::class, 'activate']);
            Route::post('upload', [PluginsController::class, 'upload']);
            Route::delete('delete/{id}', [PluginsController::class, 'delete']);
        });

        Route::group([
            'prefix' => 'images'
        ], function (){
            Route::get('all', [ImagesController::class, 'all']);
            Route::post('upload', [ImagesController::class, 'upload']);
            Route::delete('delete/{image}', [ImagesController::class, 'delete']);
        });

        Route::group([
            'prefix' => 'role'
        ], function (){
            Route::get('all-permissions', [RolesController::class, 'allPermissions']);
            Route::get('all-roles', [RolesController::class, 'allRoles']);
            Route::get('all', [RolesController::class, 'all']);
            Route::get('find/{id}', [RolesController::class, 'find']);
            Route::post('action/{role?}', [RolesController::class, 'action']);
            Route::delete('delete/{id}', [RolesController::class, 'delete']);
        });

        Route::group([
            'prefix' => 'offer-schema'
        ], function (){
            Route::get('all', [OfferSchemasController::class, 'all']);
            Route::get('all-offer-schemas', [OfferSchemasController::class, 'allOfferSchemas']);
            Route::get('find/{id}', [OfferSchemasController::class, 'find']);
            Route::post('action/{id?}', [OfferSchemasController::class, 'action']);
            Route::delete('delete/{id}', [OfferSchemasController::class, 'delete']);
        });


        Route::group([
            'prefix' => 'payment-method'
        ], function (){
            Route::get('all-payment-methods', [PaymentMethodsController::class, 'allPaymentMethods']);
        });



        Route::group([
            'prefix' => 'offer'
        ], function (){
            Route::get('all', [OffersController::class, 'all']);
            Route::get('all-offers', [OffersController::class, 'allOffers']);
            Route::get('find/{id}', [OffersController::class, 'find']);
            Route::post('action/{id?}', [OffersController::class, 'action']);
            Route::delete('delete/{id}', [OffersController::class, 'delete']);
            Route::post('upload', [OffersController::class, 'upload']);
        });

        Route::group([
            'prefix' => 'category'
        ], function (){
            Route::get('all', [CategoriesController::class, 'all']);
            Route::get('all-categories', [CategoriesController::class, 'allCategories']);
            Route::get('find/{id}', [CategoriesController::class, 'find']);
            Route::post('action/{id?}', [CategoriesController::class, 'action']);
            Route::delete('delete/{id}', [CategoriesController::class, 'delete']);
            Route::post('upload/{id}', [CategoriesController::class, 'upload']);
        });

        Route::group([
            'prefix' => 'subcategory'
        ], function (){
            Route::get('all', [SubCategoriesController::class, 'all']);
            Route::get('all-subcategories', [SubCategoriesController::class, 'allSubCategories']);
            Route::get('find/{id}', [SubCategoriesController::class, 'find']);
            Route::post('action/{id?}', [SubCategoriesController::class, 'action']);
            Route::delete('delete/{id}', [SubCategoriesController::class, 'delete']);
            Route::post('upload/{id?}', [SubCategoriesController::class, 'upload']);
        });

        Route::group([
            'prefix' => 'brand'
        ], function (){
            Route::get('all', [BrandsController::class, 'all']);
            Route::get('all-brands', [BrandsController::class, 'allBrands']);
            Route::get('find/{id}', [BrandsController::class, 'find']);
            Route::post('action/{id?}', [BrandsController::class, 'action']);
            Route::delete('delete/{id}', [BrandsController::class, 'delete']);
            Route::post('upload/{id?}', [BrandsController::class, 'upload']);
        });

        Route::group([
            'prefix' => 'product'
        ], function (){
            Route::get('all', [ProductsController::class, 'all']);
            Route::get('find/{id}', [ProductsController::class, 'find']);
            Route::get('all-products', [ProductsController::class, 'allProducts']);
            Route::get('dropdown-data', [ProductsController::class, 'dropDownData']);
            Route::post('action/{product?}', [ProductsController::class, 'action']);
            Route::delete('delete/{id}', [ProductsController::class, 'delete']);
            Route::post('upload/{id?}', [ProductsController::class, 'upload']);
            Route::post('upload-video/{id?}', [ProductsController::class, 'uploadVideo']);
            Route::get('all-images/{productId}', [ProductsController::class, 'allImages']);
            Route::post('upload-images/{productId}', [ProductsController::class, 'multipleImageUpload']);
            Route::delete('delete-image/{productImageId}', [ProductsController::class, 'deleteProductImage']);
        });

        Route::group([
            'prefix' => 'product-image-attributes'
        ], function (){
            Route::post('action', [ProductImageAttributesController::class, 'action']);
        });

        Route::group([
            'prefix' => 'tag'
        ], function (){
            Route::get('all', [TagsController::class, 'all']);
            Route::post('action/{tag?}', [TagsController::class, 'action']);
        });

        Route::group([
            'prefix' => 'attribute'
        ], function (){
            Route::get('all', [AttributesController::class, 'all']);
            Route::get('all-attributes', [AttributesController::class, 'allAttributes']);
            Route::get('find/{id}', [AttributesController::class, 'find']);
            Route::post('action/{id?}', [AttributesController::class, 'action']);
            Route::delete('delete/{id}', [AttributesController::class, 'delete']);
        });

        Route::group([
            'prefix' => 'cart',
        ], function (){
            Route::get('by-user', [CartsController::class, "byUser"]);
            Route::post('action', [CartsController::class, "action"]);
            Route::delete('delete/{id}', [CartsController::class, 'delete']);
            Route::post('update-shipping', [CartsController::class, 'updateShipping']);
        });

        Route::group([
            'prefix' => 'updated-inventory'
        ], function (){
            Route::get('find/{productId}', [UpdatedInventoriesController::class, 'byProduct']);
            Route::post('action/{productId}', [UpdatedInventoriesController::class, 'action']);
        });

        Route::group([
            'prefix' => 'setting'
        ], function (){
            Route::get('find', [SettingsController::class, 'find']);
            Route::post('currency', [SettingsController::class, 'currency']);
            Route::post('address', [SettingsController::class, 'address']);
            Route::post('upload-logo', [SettingsController::class, 'uploadLogo']);
            Route::get('convert-image/{imageName}', [SettingsController::class, 'convert']);

            Route::get('social-login-find', [SettingsController::class, 'socialLoginFind']);
            Route::get('smtp-find', [SettingsController::class, 'smtpFind']);
            Route::get('media-storage-find', [SettingsController::class, 'mediaStorageFind']);

            Route::post('social-login-action', [SettingsController::class, 'socialLoginAction']);
            Route::post('smtp-action', [SettingsController::class, 'smtpAction']);
            Route::post('media-storage-action', [SettingsController::class, 'mediaStorageAction']);

            Route::post('miscellaneous', [SettingsController::class, 'miscellaneous']);
            Route::post('analytics', [SettingsController::class, 'analytics']);
        });

        Route::group([
            'prefix' => 'site-setting'
        ], function (){
            Route::get('find', [SiteSettingController::class, 'find']);
            Route::post('upload', [SiteSettingController::class, 'upload']);
            Route::post('action', [SiteSettingController::class, 'action']);
        });



        Route::group([
            'prefix' => 'offer-meta'
        ], function (){
            Route::get('find', [OfferMetasController::class, 'find']);
            Route::post('action', [OfferMetasController::class, 'action']);
        });


        Route::group([
            'prefix' => 'store'
        ], function (){
            Route::get('find', [StoreController::class, 'find']);
            Route::post('action', [StoreController::class, 'action']);
            Route::post('upload-logo', [StoreController::class, 'uploadLogo']);
        });

        Route::group([
            'prefix' => 'pos-setting'
        ], function (){
            Route::get('find', [PosSettingsController::class, 'find']);
            Route::post('action', [PosSettingsController::class, 'action']);
            Route::post('upload', [PosSettingsController::class, 'upload']);
            Route::delete('delete', [PosSettingsController::class, 'delete']);
        });

        Route::group([
            'prefix' => 'pos-order'
        ], function (){
            Route::get('all', [PosOrdersController::class, 'all']);
            Route::post('action', [PosOrdersController::class, "action"]);
            Route::delete('delete/{id}', [PosOrdersController::class, 'delete']);
        });

        Route::group([
            'prefix' => 'withdrawal-account'
        ], function (){
            Route::get('all', [WithdrawalAccountsController::class, 'all']);
            Route::get('find/{id}', [WithdrawalAccountsController::class, 'find']);
            Route::post('action/{withdrawalAccount?}', [WithdrawalAccountsController::class, 'action']);
            Route::delete('delete/{id}', [WithdrawalAccountsController::class, 'delete']);
        });

        Route::group([
            'prefix' => 'withdrawal-request'
        ], function (){
            Route::get('all', [WithdrawalsController::class, 'all']);
            Route::get('find', [WithdrawalsController::class, 'find']);
            Route::post('withdraw', [WithdrawalsController::class, 'withdrawMoney']);
            Route::post('cancel', [WithdrawalsController::class, 'withdrawCancel']);
            Route::post('approve', [WithdrawalsController::class, 'withdrawApprove']);
            Route::delete('delete/{id}', [WithdrawalsController::class, 'delete']);
        });

        Route::group([
            'prefix' => 'payment'
        ], function (){
            Route::get('all-payments', [BrandsController::class, 'allPayments']);
            Route::get('find', [PaymentsController::class, 'find']);
            Route::post('save', [PaymentsController::class, 'save']);
        });

        Route::group([
            'prefix' => 'user'
        ], function (){
            Route::get('all', [UsersController::class, 'all']);
            Route::get('all-users', [UsersController::class, 'allUsers']);
            Route::delete('delete/{id}', [UsersController::class, 'delete']);


            Route::group([
                'prefix' => 'address',
            ], function (){
                Route::get('all', [UsersController::class, "addresses"]);
                Route::post('action', [UsersController::class, "addressAction"]);
                Route::delete('delete/{id}', [UsersController::class, "deleteAddress"]);
            });
        });


        Route::group([
            'prefix' => 'guest-user'
        ], function (){
            Route::get('all', [GuestUsersController::class, 'all']);
            Route::get('all-guest-users', [GuestUsersController::class, 'allGuestUsers']);
            Route::delete('delete/{id}', [GuestUsersController::class, 'delete']);
        });



        Route::group([
            'prefix' => 'subscriber'
        ], function (){
            Route::get('all', [SubscriptionEmailsController::class, 'all']);
            Route::delete('delete/{id}', [SubscriptionEmailsController::class, 'delete']);
            Route::get('all-subscribers', [SubscriptionEmailsController::class, 'allSubscribers']);
            Route::post('send-subscription-email', [SubscriptionEmailsController::class, 'sendSubscriptionEmail']);
        });

        Route::group([
            'prefix' => 'subscription-email-format'
        ], function (){
            Route::get('all-subscription-email-formats', [SubscriptionEmailFormatsController::class, 'allEmailFormats']);
            Route::get('all', [SubscriptionEmailFormatsController::class, 'all']);
            Route::get('find/{id}', [SubscriptionEmailFormatsController::class, 'find']);
            Route::post('action/{subscriptionEmailFormat?}', [SubscriptionEmailFormatsController::class, 'action']);
            Route::delete('delete/{id}', [SubscriptionEmailFormatsController::class, 'delete']);
        });


        Route::group([
            'prefix' => 'user-message'
        ], function (){
            Route::get('all', [ContactUsController::class, 'all']);
            Route::get('find/{id}', [ContactUsController::class, 'find']);
            Route::post('action/{contactUs?}', [ContactUsController::class, 'action']);
            Route::delete('delete/{id}', [ContactUsController::class, 'delete']);
        });

        Route::group([
            'prefix' => 'page'
        ], function (){
            Route::get('all', [PagesController::class, 'all']);
            Route::get('all-pages', [PagesController::class, 'allPages']);
            Route::post('action/{id?}', [PagesController::class, 'action']);
            Route::delete('delete/{id}', [PagesController::class, 'delete']);
            Route::get('find/{id}', [PagesController::class, 'find']);
        });

        Route::group([
            'prefix' => 'footer-link'
        ], function (){
            Route::get('all', [FooterLinksController::class, 'all']);
            Route::post('payment-social-action/{footerLink?}', [FooterLinksController::class, 'action']);
            Route::post('service-about-action', [FooterLinksController::class, 'serviceAndAboutAction']);
            Route::delete('delete/{id}', [FooterLinksController::class, 'delete']);
        });

        Route::group([
            'prefix' => 'header-link'
        ], function (){
            Route::get('all', [HeaderLinksController::class, 'all']);
            Route::post('action', [HeaderLinksController::class, 'action']);
        });

        Route::group([
            'prefix' => 'footer-image-link'
        ], function (){
            Route::get('all', [FooterImageLinksController::class, 'all']);
            Route::get('find/{id}', [FooterImageLinksController::class, 'find']);
            Route::post('action/{footerImageLink?}', [FooterImageLinksController::class, 'action']);
            Route::delete('delete/{id}', [FooterImageLinksController::class, 'delete']);
            Route::post('image/{id?}', [FooterImageLinksController::class, 'upload']);
        });

        Route::group([
            'prefix' => 'home-slider-image'
        ], function (){
            Route::get('all', [HomeSlidersController::class, 'all']);
            Route::get('find/{id}', [HomeSlidersController::class, 'find']);
            Route::post('action/{id?}', [HomeSlidersController::class, 'action']);
            Route::delete('delete/{id}', [HomeSlidersController::class, 'delete']);
            Route::post('image/{id?}', [HomeSlidersController::class, 'upload']);
            Route::post('upload/{id?}', [HomeSlidersController::class, 'upload']);
        });

        Route::group([
            'prefix' => 'site-feature'
        ], function (){
            Route::get('all', [SiteFeaturesController::class, 'all']);
            Route::get('find/{id}', [SiteFeaturesController::class, 'find']);
            Route::post('action/{id?}', [SiteFeaturesController::class, 'action']);
            Route::post('upload/{id?}', [SiteFeaturesController::class, 'upload']);
            Route::delete('delete/{id}', [SiteFeaturesController::class, 'delete']);
        });

        Route::group([
            'prefix' => 'banner'
        ], function (){
            Route::get('all', [BannersController::class, 'all']);
            Route::get('find/{id}', [BannersController::class, 'find']);
            Route::post('action/{banner?}', [BannersController::class, 'action']);
            Route::post('image/{id?}', [BannersController::class, 'upload']);
            Route::post('upload/{id?}', [BannersController::class, 'upload']);
        });

        Route::group([
            'prefix' => 'flash-sale'
        ], function (){
            Route::get('all', [FlashSalesController::class, 'all']);
            Route::post('action/{id?}', [FlashSalesController::class, 'action']);
            Route::get('find/{id}', [FlashSalesController::class, 'find']);
        /*    Route::get('find-products/{id}', [FlashSalesController::class, 'findProducts']);*/
            Route::delete('delete/{id}', [FlashSalesController::class, 'delete']);
        });

        Route::group([
            'prefix' => 'tax-rule'
        ], function (){
            Route::get('all', [TaxRulesController::class, 'all']);
            Route::get('all-tax-rules', [TaxRulesController::class, 'allList']);
            Route::get('find/{id}', [TaxRulesController::class, 'find']);
            Route::post('action/{id?}', [TaxRulesController::class, 'action']);
            Route::delete('delete/{id}', [TaxRulesController::class, 'delete']);
        });

        Route::group([
            'prefix' => 'voucher'
        ], function (){
            Route::get('all', [VouchersController::class, 'all']);
            Route::get('find/{id}', [VouchersController::class, 'find']);
            Route::post('action/{id?}', [VouchersController::class, 'action']);
            Route::delete('delete/{id}', [VouchersController::class, 'delete']);
            Route::post('validity', [VouchersController::class, 'validity']);
        });

        Route::group([
            'prefix' => 'bundle-deal'
        ], function (){
            Route::get('all', [BundleDealsController::class, 'all']);
            Route::get('all-bundle-deals', [BundleDealsController::class, 'allList']);
            Route::get('find/{id}', [BundleDealsController::class, 'find']);
            Route::post('action/{id?}', [BundleDealsController::class, 'action']);
            Route::delete('delete/{id}', [BundleDealsController::class, 'delete']);
        });

        Route::group([
            'prefix' => 'shipping-rule'
        ], function (){
            Route::get('all', [ShippingRulesController::class, 'all']);
            Route::get('all-shipping-rules', [ShippingRulesController::class, 'allList']);
            Route::get('find/{id}', [ShippingRulesController::class, 'find']);
            Route::post('action/{id?}', [ShippingRulesController::class, 'action']);
            Route::delete('delete/{id}', [ShippingRulesController::class, 'delete']);
        });

        Route::group([
            'prefix' => 'wysiwyg-image'
        ], function (){
            Route::post('upload', [WysiwygImagesController::class, 'upload']);
            Route::delete('delete/{image_name}', [WysiwygImagesController::class, 'delete']);
        });

        Route::group([
            'prefix' => 'page-wysiwyg-image'
        ], function (){
            Route::post('upload', [PageWysiwygImagesController::class, 'upload']);
            Route::delete('delete/{image_name}', [PageWysiwygImagesController::class, 'delete']);
        });


        Route::group([
            'prefix' => 'feature-wysiwyg-image'
        ], function (){
            Route::post('upload', [FeatureWysiwygImageController::class, 'upload']);
            Route::delete('delete/{image_name}', [FeatureWysiwygImageController::class, 'delete']);
        });

        Route::group([
            'prefix' => 'product-collection'
        ], function (){
            Route::get('all', [ProductCollectionsController::class, 'all']);
            Route::get('all-product-collections', [ProductCollectionsController::class, 'allList']);
            Route::get('find/{id}', [ProductCollectionsController::class, 'find']);
            Route::post('action/{id?}', [ProductCollectionsController::class, 'action']);
            Route::delete('delete/{id}', [ProductCollectionsController::class, 'delete']);
        });


        Route::group([
            'prefix' => 'custom-script'
        ], function (){
            Route::get('all', [CustomScriptsController::class, 'all']);
            Route::get('find/{id}', [CustomScriptsController::class, 'find']);
            Route::post('action/{id?}', [CustomScriptsController::class, 'action']);
            Route::delete('delete/{id}', [CustomScriptsController::class, 'delete']);
        });


        Route::group([
            'prefix' => 'order'
        ], function (){
            Route::get('all', [OrdersController::class, 'all']);
            Route::get('vendor-all', [OrdersController::class, 'vendorAll']);
            Route::get('find/{id}', [OrdersController::class, 'find']);
            Route::post('update-status', [OrdersController::class, 'updateStatus']);
            Route::post('payment-status', [OrdersController::class, 'updatePaymentStatus']);
            Route::post('payment-method', [OrdersController::class, 'updatePaymentMethod']);
            Route::delete('delete/{id}', [OrdersController::class, 'delete']);
            Route::get('send-delivered-email/{id}', [OrdersController::class, 'sendDeliveredEmail']);

        });

        Route::group([
            'prefix' => 'rating-review'
        ], function (){
            Route::get('all', [RatingReviewsController::class, 'all']);
            Route::delete('delete/{id}', [RatingReviewsController::class, 'delete']);
        });

        Route::group([
            'prefix' => 'cancellation',
        ], function (){
            Route::get('find/{orderId}', [CancellationsController::class, 'find']);
            Route::get('refund/{id}', [CancellationsController::class, 'refund']);
        });

        Route::group([
            'prefix' => 'language'
        ], function (){
            Route::get('all', [LanguageController::class, 'all']);
            Route::get('find/{id}', [LanguageController::class, 'find']);
            Route::post('action/{language?}', [LanguageController::class, 'action']);
            Route::delete('delete/{id}', [LanguageController::class, 'delete']);
        });
    });
});


Route::group([
    'prefix' => 'v1'
], function (){

    Route::get('common', [FrontendController::class, 'common']);
    Route::get('home', [FrontendController::class, 'home']);
    Route::get('products', [FrontendController::class, 'products']);
    Route::get('offered-products', [FrontendController::class, 'offeredProducts']);
    Route::get('categories', [FrontendController::class, 'categories']);
    Route::get('all', [FrontendController::class, 'all']);
    Route::get('brands', [FrontendController::class, 'brands']);
    Route::get('search', [FrontendController::class, 'search']);
    Route::get('product/{id}', [FrontendController::class, 'product']);
    Route::get('flash-sale/{id?}', [FrontendController::class, 'flashSale']);
    Route::get('reviews/{id}', [FrontendController::class, 'reviews']);
    Route::get('suggested-products/{id}', [FrontendController::class, 'productSuggestion']);
    Route::get('page', [FrontendController::class, 'page']);
    Route::post('contact', [FrontendController::class, 'contactUs']);
    Route::post('email-subscription', [SubscriptionEmailsController::class, "emailSubscription"]);
    Route::get('track-order', [FrontendController::class, "trackOrder"]);
    Route::get('store', [FrontendController::class, "store"]);
    Route::get('offer', [FrontendController::class, "offer"]);
    Route::get('payment-gateway', [FrontendController::class, "paymentGateway"]);
    Route::get('localization', [FrontendController::class, "localization"]);
    Route::get('countries-phones', [FrontendController::class, "countriesPhones"]);

   Route::get('/iyzico-redirect', [IyzicoPaymentController::class, 'redirect'])->name('iyzico.redirect');

    Route::post('/iyzico-callback', [IyzicoPaymentController::class, 'callback'])
        ->name('iyzico.callback');

    Route::group([
        'prefix' => 'cart',
    ], function (){
        Route::get('by-user', [CartsController::class, "byUser"]);
        Route::post('action', [CartsController::class, "action"]);
        Route::post('buy-now', [CartsController::class, "buyNow"]);
        Route::delete('delete/{id}', [CartsController::class, 'delete']);
        Route::post('change', [CartsController::class, 'changeSelected']);
        Route::post('update-shipping', [CartsController::class, 'updateShipping']);
    });


    Route::group([
        'prefix' => 'cancellation',
    ], function (){
        Route::post('cancel-order', [CancellationsController::class, 'cancelOrder']);
        Route::get('find/{orderId}', [CancellationsController::class, 'findCancellation']);
    });

    Route::group([
        'prefix' => 'voucher',
    ], function (){
        Route::post('validity', [VouchersController::class, 'validity']);
    });

    Route::group([
        'prefix' => 'rating-review',
    ], function (){
        Route::post('action', [RatingReviewsController::class, "action"]);
        Route::get('find/{productId}', [RatingReviewsController::class, "find"]);
    });

    Route::group([
        'prefix' => 'order',
    ], function (){
        Route::post('by-user', [OrdersController::class, "byUser"]);
        Route::post('action', [OrdersController::class, "action"]);
        Route::post('payment-done', [OrdersController::class, 'paymentDone']);
        Route::post('payfast-notify', [OrdersController::class, 'payFastNotify']);
        Route::post('transaction', [OrdersController::class, 'transaction']);
        Route::get('send-order-email/{id}', [OrdersController::class, 'sendOrderEmail']);
    });



    Route::group([
        'prefix' => 'seller',
    ], function (){
        Route::post('signup', [SellerController::class, 'signup']);
        Route::post('verify', [SellerController::class, 'verify']);
    });


    Route::group([
        'prefix' => 'user'
    ], function (){
        Route::group([
            'prefix' => 'address',
        ], function (){
            Route::get('all', [UsersController::class, "addresses"]);
            Route::post('action', [UsersController::class, "addressAction"]);
            Route::delete('delete/{id}', [UsersController::class, "deleteAddress"]);
        });

        Route::get('profile', [UsersController::class, "profile"]);

        Route::group([

            'prefix' => 'social-login',
            'middleware' => ['social', 'web']

        ], function () {
            Route::get('redirect/{service}',  [UsersController::class, 'redirectToProvider']);
            Route::get('callback/{service}',  [UsersController::class, 'handleProviderCallback']);
        });

        Route::post('signin', [UsersController::class, 'login']);
        Route::post('signup', [UsersController::class, 'signup']);
        Route::post('verify', [UsersController::class, 'verify']);
        Route::post('forgot-password', [UsersController::class, 'forgotPassword']);
        Route::post('update-password', [UsersController::class, 'updatePassword']);

        Route::get('user-vouchers', [UsersController::class, "vouchers"]);


        Route::group([
            'middleware' =>  ['auth:user', 'scope:user']
        ], function () {
            Route::get('logout', [UsersController::class, "logout"]);


            Route::post('update-profile', [UsersController::class, "updateProfile"]);
            Route::post('update-user-password', [UsersController::class, "updateUserPassword"]);


            Route::group([
                'prefix' => 'compare-list',
            ], function (){
                Route::get('all', [CompareListsController::class, "all"]);
                Route::post('action', [CompareListsController::class, "action"]);
            });


            Route::group([
                'prefix' => 'store',
            ], function (){
                Route::post('follow', [UserFollowStoreController::class, 'action']);
                Route::get('following-list', [UserFollowStoreController::class, 'all']);
            });

            Route::group([
                'prefix' => 'wishlist',
            ], function (){
                Route::get('all', [UserWishlistsController::class, "wishlists"]);
                Route::post('action', [UserWishlistsController::class, "wishlistAction"]);
            });
        });

        Route::group([
            'middleware' =>  ['auth:user', 'scope:user']
        ], function () {
            Route::delete('delete', [UsersController::class, "deleteUser"]);
        });
    });
});
