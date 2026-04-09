<?php

declare(strict_types=1);

namespace App\Module\Comercial\DTO;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;

class CompromissoCreateDTO
{
    public function __construct(
        #[Assert\NotBlank(message: 'El titulo es obligatorio')]
        public readonly ?int $codTitulo = null,

        #[Assert\NotBlank(message: 'El cliente es obligatorio')]
        public readonly ?int $codClient = null,

        #[Assert\NotBlank(message: 'La forma de contacto es obligatoria')]
        public readonly ?int $formContactId = null,

        #[Assert\NotBlank(message: 'El medio de contacto es obligatorio')]
        public readonly ?int $typeContactId = null,

        #[Assert\NotBlank(message: 'La fecha de inicio es obligatoria')]
        public readonly ?string $start = null,

        public readonly ?string $end = null,

        public readonly ?string $allDay = null,

        public readonly ?string $description = null,

        #[Assert\NotBlank(message: 'La latitud es obligatoria')]
        public readonly ?string $latitud = null,

        #[Assert\NotBlank(message: 'La longitud es obligatoria')]
        public readonly ?string $longitud = null,

        public readonly ?string $direccion = null,
        public readonly ?int $idVendedor = null,
        public readonly ?int $promotorparaasignar = null,
        public readonly ?int $id_promotorasignado = null,
    ) {}

    public static function fromRequest(Request $request): self
    {
        $data = json_decode($request->getContent(), true) ?? [];

        return new self(
            codTitulo: isset($data['codTitulo']) ? (int) $data['codTitulo'] : null,
            codClient: isset($data['codClient']) ? (int) $data['codClient'] : null,
            formContactId: isset($data['formContactId']) ? (int) $data['formContactId'] : null,
            typeContactId: isset($data['typeContactId']) ? (int) $data['typeContactId'] : null,
            start: $data['start'] ?? null,
            end: $data['end'] ?? null,
            allDay: $data['allDay'] ?? null,
            description: $data['description'] ?? null,
            latitud: $data['latitud'] ?? null,
            longitud: $data['longitud'] ?? null,
            direccion: $data['direccion'] ?? null,
            idVendedor: isset($data['idVendedor']) ? (int) $data['idVendedor'] : null,
            promotorparaasignar: isset($data['promotorparaasignar']) ? (int) $data['promotorparaasignar'] : null,
            id_promotorasignado: isset($data['id_promotorasignado']) ? (int) $data['id_promotorasignado'] : null,
        );
    }

    public function toArray(): array
    {
        return array_filter(get_object_vars($this), fn($v) => $v !== null);
    }
}
