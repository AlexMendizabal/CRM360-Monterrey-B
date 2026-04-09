<?php

declare(strict_types=1);

namespace App\Module\Comercial\DTO;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;

class CompromissoReagendarDTO
{
    public function __construct(
        #[Assert\NotBlank(message: 'El id de la cita es obligatorio')]
        #[Assert\Positive]
        public readonly ?int $id = null,

        #[Assert\NotBlank(message: 'El motivo de reprogramacion es obligatorio')]
        public readonly ?int $rescheduleId = null,

        #[Assert\NotBlank]
        public readonly ?int $codTitulo = null,

        public readonly ?int $codClient = null,
        public readonly ?int $formContactId = null,
        public readonly ?int $typeContactId = null,
        public readonly ?string $start = null,
        public readonly ?string $end = null,
        public readonly ?string $allDay = null,
        public readonly ?string $description = null,
        public readonly ?string $status = null,
        public readonly ?int $idVendedor = null,
        public readonly ?int $promotorparaasignar = null,
        public readonly ?array $color = null,
    ) {}

    public static function fromRequest(Request $request): self
    {
        $data = json_decode($request->getContent(), true) ?? [];

        return new self(
            id: isset($data['id']) ? (int) $data['id'] : null,
            rescheduleId: isset($data['rescheduleId']) ? (int) $data['rescheduleId'] : null,
            codTitulo: isset($data['codTitulo']) ? (int) $data['codTitulo'] : null,
            codClient: isset($data['codClient']) ? (int) $data['codClient'] : null,
            formContactId: isset($data['formContactId']) ? (int) $data['formContactId'] : null,
            typeContactId: isset($data['typeContactId']) ? (int) $data['typeContactId'] : null,
            start: $data['start'] ?? null,
            end: $data['end'] ?? null,
            allDay: $data['allDay'] ?? null,
            description: $data['description'] ?? null,
            status: $data['status'] ?? null,
            idVendedor: isset($data['idVendedor']) ? (int) $data['idVendedor'] : null,
            promotorparaasignar: isset($data['promotorparaasignar']) ? (int) $data['promotorparaasignar'] : null,
            color: $data['color'] ?? null,
        );
    }

    public function toArray(): array
    {
        return array_filter(get_object_vars($this), fn($v) => $v !== null);
    }
}
