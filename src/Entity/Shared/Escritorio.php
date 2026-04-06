<?php

namespace App\Entity\Shared;

use Doctrine\ORM\Mapping as ORM;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     schema="Escritorio",
 *     description="Oficina/Sucursal",
 *     @OA\Property(property="id", type="integer"),
 *     @OA\Property(property="nmEscr", type="string"),
 *     @OA\Property(property="codigoAlmacen", type="string"),
 *     @OA\Property(property="idSitu", type="integer"),
 *     @OA\Property(property="idCiudad", type="integer")
 * )
 */
#[ORM\Entity]
#[ORM\Table(name: 'tb_escr')]
class Escritorio
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(name: 'nm_escr', type: 'string', length: 255, nullable: true)]
    private ?string $nmEscr = null;

    #[ORM\Column(name: 'codigo_almacen', type: 'string', length: 100, nullable: true)]
    private ?string $codigoAlmacen = null;

    #[ORM\Column(name: 'id_situ', type: 'integer', nullable: true)]
    private ?int $idSitu = null;

    #[ORM\Column(name: 'id_ciudad', type: 'integer', nullable: true)]
    private ?int $idCiudad = null;

    public function getId(): ?int { return $this->id; }
    public function getNmEscr(): ?string { return $this->nmEscr; }
    public function setNmEscr(?string $nmEscr): self { $this->nmEscr = $nmEscr; return $this; }
    public function getCodigoAlmacen(): ?string { return $this->codigoAlmacen; }
    public function setCodigoAlmacen(?string $codigoAlmacen): self { $this->codigoAlmacen = $codigoAlmacen; return $this; }
    public function getIdSitu(): ?int { return $this->idSitu; }
    public function setIdSitu(?int $idSitu): self { $this->idSitu = $idSitu; return $this; }
    public function getIdCiudad(): ?int { return $this->idCiudad; }
    public function setIdCiudad(?int $idCiudad): self { $this->idCiudad = $idCiudad; return $this; }
}
