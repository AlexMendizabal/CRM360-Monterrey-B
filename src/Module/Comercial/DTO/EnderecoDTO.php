<?php

declare(strict_types=1);

namespace App\Module\Comercial\DTO;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;

class EnderecoDTO
{
    public function __construct(
        #[Assert\NotBlank(message: 'El cliente es obligatorio')]
        #[Assert\Positive]
        public readonly ?int $codCliente = null,

        public readonly ?int $idEndereco = null,

        #[Assert\NotBlank(message: 'La direccion es obligatoria')]
        #[Assert\Length(max: 300)]
        public readonly ?string $endereco = null,

        public readonly ?string $complemento = null,
        public readonly ?string $bairro = null,

        #[Assert\NotBlank(message: 'La ciudad es obligatoria')]
        public readonly ?string $cidade = null,

        public readonly ?string $uf = null,
        public readonly ?string $cep = null,
        public readonly ?string $titulo = null,
        public readonly ?string $observacao = null,
        public readonly ?string $latitude = null,
        public readonly ?string $longitude = null,
    ) {}

    public static function fromRequest(Request $request): self
    {
        $data = json_decode($request->getContent(), true) ?? [];

        return new self(
            codCliente: isset($data['codCliente']) ? (int) $data['codCliente'] : null,
            idEndereco: isset($data['idEndereco']) ? (int) $data['idEndereco'] : null,
            endereco: $data['endereco'] ?? null,
            complemento: $data['complemento'] ?? null,
            bairro: $data['bairro'] ?? null,
            cidade: $data['cidade'] ?? null,
            uf: $data['uf'] ?? null,
            cep: $data['cep'] ?? null,
            titulo: $data['titulo'] ?? null,
            observacao: $data['observacao'] ?? null,
            latitude: $data['latitude'] ?? null,
            longitude: $data['longitude'] ?? null,
        );
    }

    public function toArray(): array
    {
        return array_filter(get_object_vars($this), fn($v) => $v !== null);
    }
}
