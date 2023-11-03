<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Diagnose>
 */
class DiagnoseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'image' => 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/10/28064854/12.-Tips-Merawat-Anak-Kucing-Munchkin.jpg',
            'disease' => fake()->text(7),
            'desc' => fake()->paragraph(2, true),
            'symptom' => fake()->paragraph(2, true),
            'treatment' => fake()->paragraph(2, true),
        ];
    }
}