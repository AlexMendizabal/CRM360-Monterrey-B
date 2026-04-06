<?php

namespace App\Entity\Comercial;

use App\Repository\Comercial\ClienteRepository;
use Doctrine\ORM\Mapping as ORM;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     schema="Cliente",
 *     description="Cliente del CRM",
 *     @OA\Property(property="idCliente", type="integer"),
 *     @OA\Property(property="primNome", type="string"),
 *     @OA\Property(property="seguNome", type="string"),
 *     @OA\Property(property="cnpjCpf", type="string"),
 *     @OA\Property(property="tipoPessoa", type="string"),
 *     @OA\Property(property="codigoCliente", type="string"),
 *     @OA\Property(property="email", type="string"),
 *     @OA\Property(property="telefono", type="string"),
 *     @OA\Property(property="situacao", type="integer")
 * )
 */
#[ORM\Entity(repositoryClass: ClienteRepository::class)]
#[ORM\Table(name: 'MTCORP_MODU_CLIE_BASE')]
class Cliente
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'id_cliente', type: 'integer')]
    private ?int $idCliente = null;

    #[ORM\Column(name: 'prim_nome', type: 'text', nullable: true)]
    private ?string $primNome = null;

    #[ORM\Column(name: 'segu_nome', type: 'text', nullable: true)]
    private ?string $seguNome = null;

    #[ORM\Column(name: 'cnpj_cpf', type: 'string', length: 18, nullable: true)]
    private ?string $cnpjCpf = null;

    #[ORM\Column(name: 'tipo_pessoa', type: 'string', length: 1, nullable: true)]
    private ?string $tipoPessoa = null;

    #[ORM\Column(name: 'id_vendedor', type: 'integer', nullable: true)]
    private ?int $idVendedor = null;

    #[ORM\Column(name: 'codigo_cliente', type: 'string', length: 100, nullable: true)]
    private ?string $codigoCliente = null;

    #[ORM\Column(name: 'email', type: 'string', length: 255, nullable: true)]
    private ?string $email = null;

    #[ORM\Column(name: 'telefono', type: 'string', length: 50, nullable: true)]
    private ?string $telefono = null;

    #[ORM\Column(name: 'celular', type: 'string', length: 50, nullable: true)]
    private ?string $celular = null;

    #[ORM\Column(name: 'situacao', type: 'integer', nullable: true)]
    private ?int $situacao = null;

    #[ORM\Column(name: 'limi_cred', type: 'decimal', precision: 15, scale: 2, nullable: true)]
    private ?string $limiCred = null;

    #[ORM\Column(name: 'data_cadastro', type: 'datetime', nullable: true)]
    private ?\DateTimeInterface $dataCadastro = null;

    #[ORM\Column(name: 'id_tipo_cliente', type: 'integer', nullable: true)]
    private ?int $idTipoCliente = null;

    #[ORM\Column(name: 'id_departamento', type: 'integer', nullable: true)]
    private ?int $idDepartamento = null;

    #[ORM\Column(name: 'nombre_factura', type: 'string', length: 255, nullable: true)]
    private ?string $nombreFactura = null;

    #[ORM\Column(name: 'created_at', type: 'datetime', nullable: true)]
    private ?\DateTimeInterface $createdAt = null;

    public function getIdCliente(): ?int { return $this->idCliente; }
    public function getPrimNome(): ?string { return $this->primNome; }
    public function setPrimNome(?string $primNome): self { $this->primNome = $primNome; return $this; }
    public function getSeguNome(): ?string { return $this->seguNome; }
    public function setSeguNome(?string $seguNome): self { $this->seguNome = $seguNome; return $this; }
    public function getCnpjCpf(): ?string { return $this->cnpjCpf; }
    public function setCnpjCpf(?string $cnpjCpf): self { $this->cnpjCpf = $cnpjCpf; return $this; }
    public function getTipoPessoa(): ?string { return $this->tipoPessoa; }
    public function setTipoPessoa(?string $tipoPessoa): self { $this->tipoPessoa = $tipoPessoa; return $this; }
    public function getIdVendedor(): ?int { return $this->idVendedor; }
    public function setIdVendedor(?int $idVendedor): self { $this->idVendedor = $idVendedor; return $this; }
    public function getCodigoCliente(): ?string { return $this->codigoCliente; }
    public function setCodigoCliente(?string $codigoCliente): self { $this->codigoCliente = $codigoCliente; return $this; }
    public function getEmail(): ?string { return $this->email; }
    public function setEmail(?string $email): self { $this->email = $email; return $this; }
    public function getTelefono(): ?string { return $this->telefono; }
    public function setTelefono(?string $telefono): self { $this->telefono = $telefono; return $this; }
    public function getCelular(): ?string { return $this->celular; }
    public function setCelular(?string $celular): self { $this->celular = $celular; return $this; }
    public function getSituacao(): ?int { return $this->situacao; }
    public function setSituacao(?int $situacao): self { $this->situacao = $situacao; return $this; }
    public function getLimiCred(): ?string { return $this->limiCred; }
    public function setLimiCred(?string $limiCred): self { $this->limiCred = $limiCred; return $this; }
    public function getDataCadastro(): ?\DateTimeInterface { return $this->dataCadastro; }
    public function setDataCadastro(?\DateTimeInterface $dataCadastro): self { $this->dataCadastro = $dataCadastro; return $this; }
    public function getIdTipoCliente(): ?int { return $this->idTipoCliente; }
    public function setIdTipoCliente(?int $idTipoCliente): self { $this->idTipoCliente = $idTipoCliente; return $this; }
    public function getIdDepartamento(): ?int { return $this->idDepartamento; }
    public function setIdDepartamento(?int $idDepartamento): self { $this->idDepartamento = $idDepartamento; return $this; }
    public function getNombreFactura(): ?string { return $this->nombreFactura; }
    public function setNombreFactura(?string $nombreFactura): self { $this->nombreFactura = $nombreFactura; return $this; }
    public function getCreatedAt(): ?\DateTimeInterface { return $this->createdAt; }
    public function setCreatedAt(?\DateTimeInterface $createdAt): self { $this->createdAt = $createdAt; return $this; }
}
