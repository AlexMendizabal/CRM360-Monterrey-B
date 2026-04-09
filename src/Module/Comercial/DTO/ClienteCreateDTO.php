<?php

declare(strict_types=1);

namespace App\Module\Comercial\DTO;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;

class ClienteCreateDTO
{
    public function __construct(
        #[Assert\NotBlank(message: 'El nombre es obligatorio')]
        #[Assert\Length(max: 200)]
        public readonly ?string $primerNombre = null,

        public readonly ?string $segundoNombre = null,

        #[Assert\NotBlank(message: 'El documento es obligatorio')]
        #[Assert\Length(min: 5, max: 20)]
        public readonly ?string $documento = null,

        #[Assert\NotBlank(message: 'El tipo de persona es obligatorio')]
        public readonly ?string $tipoPessoa = null,

        public readonly ?int $idVendedor = null,
        public readonly ?string $email = null,
        public readonly ?string $telefone = null,
        public readonly ?int $idTipoCliente = null,
        public readonly ?int $idSetorAtividade = null,
        public readonly ?string $inscricaoEstadual = null,
        public readonly ?int $tipoPersona = null,
        public readonly ?string $emailNfe = null,
        public readonly ?int $tributacao = null,
        public readonly ?int $contribuinte = null,

        /** @var array<array{id_cnae: int, descricao?: string}> */
        public readonly array $cnaes = [],
    ) {}

    public static function fromRequest(Request $request): self
    {
        $data = json_decode($request->getContent(), true) ?? [];

        return new self(
            primerNombre: $data['primeiroNome'] ?? $data['primerNombre'] ?? null,
            segundoNombre: $data['segundoNome'] ?? $data['segundoNombre'] ?? null,
            documento: $data['documento'] ?? $data['cnpj_cpf'] ?? null,
            tipoPessoa: $data['tipoPessoa'] ?? null,
            idVendedor: isset($data['idVendedor']) ? (int) $data['idVendedor'] : null,
            email: $data['email'] ?? null,
            telefone: $data['telefone'] ?? null,
            idTipoCliente: isset($data['idTipoCliente']) ? (int) $data['idTipoCliente'] : null,
            idSetorAtividade: isset($data['setorAtividade']) ? (int) $data['setorAtividade'] : null,
            inscricaoEstadual: $data['inscricaoEstadualRg'] ?? null,
            tipoPersona: isset($data['tipo_persona']) ? (int) $data['tipo_persona'] : null,
            emailNfe: $data['emailNfe'] ?? null,
            tributacao: isset($data['tributacao']) ? (int) $data['tributacao'] : null,
            contribuinte: isset($data['contribuinte']) ? (int) $data['contribuinte'] : null,
            cnaes: $data['cnaes'] ?? [],
        );
    }

    public function toArray(): array
    {
        return array_filter(get_object_vars($this), fn($v) => $v !== null);
    }
}
