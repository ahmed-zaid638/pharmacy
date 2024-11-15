<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class AddRoleOfferSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $existingSuperAdmin = Role::where('name', 'superadmin')->first();

        if(!$existingSuperAdmin){
            return;
        }

        $roleSuperAdmin = Role::findByName('superadmin', 'admin');



        $permissions = [
            [
                'group_name' => 'offer',
                'permissions'=> [
                    'offer.view',
                    'offer.create',
                    'offer.edit',
                    'offer.delete'
                ]
            ]
        ];


        // Assign permissions
        for($i = 0; $i < count($permissions); $i++){
            $groupName = $permissions[$i]['group_name'];
            for($j = 0; $j < count($permissions[$i]['permissions']); $j++){

                $existingPermission = Permission::where('group_name', $groupName)
                    ->where('guard_name', 'admin')
                    ->where('name', $permissions[$i]['permissions'][$j])
                    ->first();

                if(!$existingPermission){
                    $permission = Permission::create([
                        'group_name' => $groupName,
                        'guard_name' => 'admin',
                        'name' => $permissions[$i]['permissions'][$j]
                    ]);

                    $roleSuperAdmin->givePermissionTo($permission);
                    $permission->assignRole($roleSuperAdmin);

                }

            }
        }
    }
}
