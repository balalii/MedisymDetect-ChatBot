<?php

namespace Database\Seeders;

use App\Models\Diagnose;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class DiagnoseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //fake data
        Diagnose::factory()->count(10)->create();
    
    }
}