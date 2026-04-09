<?php

declare(strict_types=1);

namespace App\Module\Comercial\DTO;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * DTO para guardar cotizaciones legacy (path TID/PRC_PEDI_CADA).
 */
class CotacaoSaveDTO
{
    public function __construct(
        #[Assert\NotBlank(message: 'La empresa es obligatoria')]
        public readonly ?int $codEmpresa = null,

        #[Assert\NotBlank(message: 'El deposito es obligatorio')]
        public readonly ?int $codDeposito = null,

        public readonly ?int $codCotacao = null,

        #[Assert\NotBlank(message: 'El cliente es obligatorio')]
        public readonly ?int $codCliente = null,

        #[Assert\NotBlank(message: 'La situacion es obligatoria')]
        public readonly ?int $codSituacao = null,

        public readonly ?int $codContato = null,
        public readonly ?int $codEndereco = null,

        #[Assert\NotBlank(message: 'La forma de pago es obligatoria')]
        public readonly ?int $codFormaPagamento = null,

        public readonly ?string $dataValidade = null,
        public readonly ?string $dataEntrega = null,
        public readonly ?string $notaFiscalMae = null,
        public readonly ?int $duplicatasSomenteCarteira = null,
        public readonly ?int $codFormaContato = null,
        public readonly ?int $codOrigemContato = null,
        public readonly ?string $observacoes = null,
        public readonly ?string $dadosAdicionais = null,
        public readonly ?int $freteConta = null,
        public readonly ?int $codTransportadora = null,

        #[Assert\NotBlank(message: 'Los items son obligatorios')]
        #[Assert\Count(min: 1, minMessage: 'Debe incluir al menos un item')]
        public readonly array $carrinho = [],
    ) {}

    public static function fromRequest(Request $request): self
    {
        $data = json_decode($request->getContent(), true) ?? [];

        return new self(
            codEmpresa: isset($data['codEmpresa']) ? (int) $data['codEmpresa'] : null,
            codDeposito: isset($data['codDeposito']) ? (int) $data['codDeposito'] : null,
            codCotacao: isset($data['codCotacao']) ? (int) $data['codCotacao'] : null,
            codCliente: isset($data['codCliente']) ? (int) $data['codCliente'] : null,
            codSituacao: isset($data['codSituacao']) ? (int) $data['codSituacao'] : null,
            codContato: isset($data['codContato']) ? (int) $data['codContato'] : null,
            codEndereco: isset($data['codEndereco']) ? (int) $data['codEndereco'] : null,
            codFormaPagamento: isset($data['codFormaPagamento']) ? (int) $data['codFormaPagamento'] : null,
            dataValidade: $data['dataValidade'] ?? null,
            dataEntrega: $data['dataEntrega'] ?? null,
            notaFiscalMae: $data['notaFiscalMae'] ?? null,
            duplicatasSomenteCarteira: isset($data['duplicatasSomenteCarteira']) ? (int) $data['duplicatasSomenteCarteira'] : null,
            codFormaContato: isset($data['codFormaContato']) ? (int) $data['codFormaContato'] : null,
            codOrigemContato: isset($data['codOrigemContato']) ? (int) $data['codOrigemContato'] : null,
            observacoes: $data['observacoes'] ?? null,
            dadosAdicionais: $data['dadosAdicionais'] ?? null,
            freteConta: isset($data['freteConta']) ? (int) $data['freteConta'] : null,
            codTransportadora: isset($data['codTransportadora']) ? (int) $data['codTransportadora'] : null,
            carrinho: $data['carrinho'] ?? [],
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
