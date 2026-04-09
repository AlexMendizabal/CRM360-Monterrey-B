<?php

declare(strict_types=1);

namespace App\Module\Comercial\DTO;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;

class ReporteAgendaDTO
{
    public function __construct(
        public readonly ?int $id_vendedor = null,

        #[Assert\Date(message: 'Formato de fecha inicial invalido')]
        public readonly ?string $fechaInicial = null,

        #[Assert\Date(message: 'Formato de fecha final invalido')]
        public readonly ?string $fechaFinal = null,

        public readonly ?int $estado = null,
        public readonly ?int $titulo = null,
        public readonly ?int $sucursal = null,
    ) {}

    public static function fromRequest(Request $request): self
    {
        $data = json_decode($request->getContent(), true) ?? [];

        return new self(
            id_vendedor: isset($data['id_vendedor']) ? (int) $data['id_vendedor'] : null,
            fechaInicial: !empty($data['fechaInicial']) ? date('Y-m-d', strtotime($data['fechaInicial'])) : null,
            fechaFinal: !empty($data['fechaFinal']) ? date('Y-m-d', strtotime($data['fechaFinal'])) : null,
            estado: isset($data['estado']) ? (int) $data['estado'] : null,
            titulo: isset($data['titulo']) ? (int) $data['titulo'] : null,
            sucursal: isset($data['sucursal']) ? (int) $data['sucursal'] : null,
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
