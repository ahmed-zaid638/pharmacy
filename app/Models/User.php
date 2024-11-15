<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */


    protected $casts = [
        'viewed' => 'integer',
        'verified' => 'integer',
        'remember_token' => 'integer'
    ];


    protected $fillable = ['name', 'email', 'password', 'code', 'default_address', 'phone',
        'verified', 'remember_token', 'facebook_id', 'google_id', 'viewed'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];


    public function offer_user()
    {
        return $this->hasOne(OfferUser::class, 'user_id', 'id');
    }
}
