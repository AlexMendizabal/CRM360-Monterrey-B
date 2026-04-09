<?php

declare(strict_types=1);

namespace App\Module\Comercial\DTO;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;

class OfertaCreateDTO
{
    public function __construct(
        #[Assert\NotBlank(message: 'El cliente es obligatorio')]
        #[Assert\Positive]
        public readonly ?int $idCliente = null,

        #[Assert\NotBlank(message: 'El vendedor es obligatorio')]
        #[Assert\Positive]
        public readonly ?int $idVendedor = null,

        #[Assert\NotBlank(message: 'El almacen es obligatorio')]
        #[Assert\Positive]
        public readonly ?int $idAlmacen = null,

        #[Assert\NotBlank(message: 'La forma de pago es obligatoria')]
        #[Assert\Positive]
        public readonly ?int $idFormaPago = null,

        #[Assert\NotBlank(message: 'La lista de precio es obligatoria')]
        #[Assert\Positive]
        public readonly ?int $idListaPrecio = null,

        public readonly ?string $nombreOferta = null,
        public readonly ?string $observacion = null,
        public readonly ?string $nombreFactura = null,
        public readonly ?string $fechaInicial = null,
        public readonly ?string $fechaFinal = null,

        #[Assert\NotBlank(message: 'Los items son obligatorios')]
        #[Assert\Count(min: 1, minMessage: 'Debe incluir al menos un item')]
        public readonly array $items = [],
    ) {}

    public static function fromRequest(Request $request): self
    {
        $data = json_decode($request->getContent(), true) ?? [];

        return new self(
            idCliente: isset($data['id_cliente']) ? (int) $data['id_cliente'] : null,
            idVendedor: isset($data['id_vendedor']) ? (int) $data['id_vendedor'] : null,
            idAlmacen: isset($data['id_almacen']) ? (int) $data['id_almacen'] : null,
            idFormaPago: isset($data['id_forma_pago']) ? (int) $data['id_forma_pago'] : null,
            idListaPrecio: isset($data['id_lista_precio']) ? (int) $data['id_lista_precio'] : null,
            nombreOferta: $data['nombre_oferta'] ?? null,
            observacion: $data['observacion'] ?? null,
            nombreFactura: $data['nombre_factura'] ?? null,
            fechaInicial: $data['fecha_inicial'] ?? null,
            fechaFinal: $data['fecha_final'] ?? null,
            items: $data['items'] ?? $data['carrinho'] ?? [],
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
