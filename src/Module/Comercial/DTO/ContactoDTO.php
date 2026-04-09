<?php

declare(strict_types=1);

namespace App\Module\Comercial\DTO;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;

class ContactoDTO
{
    public function __construct(
        #[Assert\NotBlank(message: 'El cliente es obligatorio')]
        #[Assert\Positive]
        public readonly ?int $codCliente = null,

        public readonly ?int $id = null,

        #[Assert\NotBlank(message: 'El nombre del contacto es obligatorio')]
        #[Assert\Length(max: 200)]
        public readonly ?string $nomeCompleto = null,

        public readonly ?int $setor = null,
        public readonly ?int $funcao = null,
        public readonly ?string $genero = null,
        public readonly ?string $dataAniversario = null,
        public readonly ?int $timeFutebol = null,
        public readonly ?string $latitude = null,
        public readonly ?string $longitude = null,

        /** @var array<array{tipo: string, valor: string}> */
        public readonly array $meiosContato = [],

        /** @var array<array{nome: string, dataNascimento?: string}> */
        public readonly array $filhos = [],
    ) {}

    public static function fromRequest(Request $request): self
    {
        $data = json_decode($request->getContent(), true) ?? [];

        return new self(
            codCliente: isset($data['codCliente']) ? (int) $data['codCliente'] : null,
            id: isset($data['id']) ? (int) $data['id'] : null,
            nomeCompleto: $data['nomeCompleto'] ?? null,
            setor: isset($data['setor']) ? (int) $data['setor'] : null,
            funcao: isset($data['funcao']) ? (int) $data['funcao'] : null,
            genero: $data['genero'] ?? null,
            dataAniversario: $data['dataAniversario'] ?? null,
            timeFutebol: isset($data['timeFutebol']) ? (int) $data['timeFutebol'] : null,
            latitude: $data['latitude'] ?? null,
            longitude: $data['longitude'] ?? null,
            meiosContato: $data['meiosContato'] ?? [],
            filhos: $data['filhos'] ?? [],
        );
    }

    public function toArray(): array
    {
        return array_filter(get_object_vars($this), fn($v) => $v !== null);
    }
}
