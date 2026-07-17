<?php

namespace App\Http\Requests\Product;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class ProductStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'image' => ['required', 'string'],
            'name' => ['required', 'string'],
            'description' => ['nullable', 'string'],
            'price' => ['integer', 'max:999999', 'min:1'],
        ];
    }
}
