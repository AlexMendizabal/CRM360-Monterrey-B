<?php

namespace App\Entity\Comercial;

use App\Repository\Comercial\VendedorRepository;
use Doctrine\ORM\Mapping as ORM;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     schema="Vendedor",
 *     description="Vendedor/Ejecutivo de ventas",
 *     @OA\Property(property="id", type="integer"),
 *     @OA\Property(property="codigoSap", type="string"),
 *     @OA\Property(property="nmVend", type="string"),
 *     @OA\Property(property="nmEmai", type="string"),
 *     @OA\Property(property="idEscr", type="integer")
 * )
 */
#[ORM\Entity(repositoryClass: VendedorRepository::class)]
#[ORM\Table(name: 'tb_vend')]
class Vendedor
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'ID', type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(name: 'codigo_sap', type: 'string', length: 100, nullable: true)]
    private ?string $codigoSap = null;

    #[ORM\Column(name: 'ID_ESCR', type: 'integer', nullable: true)]
    private ?int $idEscr = null;

    #[ORM\Column(name: 'NM_VEND', type: 'string', length: 255, nullable: true)]
    private ?string $nmVend = null;

    #[ORM\Column(name: 'NM_RAZA_SOCI', type: 'string', length: 255, nullable: true)]
    private ?string $nmRazaSoci = null;

    #[ORM\Column(name: 'NR_CPF_CNPJ', type: 'string', length: 50, nullable: true)]
    private ?string $nrCpfCnpj = null;

    #[ORM\Column(name: 'NM_EMAI', type: 'string', length: 255, nullable: true)]
    private ?string $nmEmai = null;

    #[ORM\Column(name: 'ID_EQUI_VEND', type: 'integer', nullable: true)]
    private ?int $idEquiVend = null;

    #[ORM\Column(name: 'ID_TIPO_VEND', type: 'integer', nullable: true)]
    private ?int $idTipoVend = null;

    #[ORM\Column(name: 'sigla', type: 'string', length: 50, nullable: true)]
    private ?string $sigla = null;

    public function getId(): ?int { return $this->id; }
    public function getCodigoSap(): ?string { return $this->codigoSap; }
    public function setCodigoSap(?string $codigoSap): self { $this->codigoSap = $codigoSap; return $this; }
    public function getIdEscr(): ?int { return $this->idEscr; }
    public function setIdEscr(?int $idEscr): self { $this->idEscr = $idEscr; return $this; }
    public function getNmVend(): ?string { return $this->nmVend; }
    public function setNmVend(?string $nmVend): self { $this->nmVend = $nmVend; return $this; }
    public function getNmRazaSoci(): ?string { return $this->nmRazaSoci; }
    public function setNmRazaSoci(?string $nmRazaSoci): self { $this->nmRazaSoci = $nmRazaSoci; return $this; }
    public function getNrCpfCnpj(): ?string { return $this->nrCpfCnpj; }
    public function setNrCpfCnpj(?string $nrCpfCnpj): self { $this->nrCpfCnpj = $nrCpfCnpj; return $this; }
    public function getNmEmai(): ?string { return $this->nmEmai; }
    public function setNmEmai(?string $nmEmai): self { $this->nmEmai = $nmEmai; return $this; }
    public function getIdEquiVend(): ?int { return $this->idEquiVend; }
    public function setIdEquiVend(?int $idEquiVend): self { $this->idEquiVend = $idEquiVend; return $this; }
    public function getIdTipoVend(): ?int { return $this->idTipoVend; }
    public function setIdTipoVend(?int $idTipoVend): self { $this->idTipoVend = $idTipoVend; return $this; }
    public function getSigla(): ?string { return $this->sigla; }
    public function setSigla(?string $sigla): self { $this->sigla = $sigla; return $this; }
}
