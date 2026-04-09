<?php

namespace App\Entity\Comercial;

use Doctrine\ORM\Mapping as ORM;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     schema="Almacen",
 *     description="Almacen/Deposito",
 *     @OA\Property(property="idAlmacen", type="integer"),
 *     @OA\Property(property="codigoAlmacen", type="string")
 * )
 */
#[ORM\Entity]
#[ORM\Table(name: 'tb_almacen')]
class Almacen
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'id_almacen', type: 'integer')]
    private ?int $idAlmacen = null;

    #[ORM\Column(name: 'codigo_almacen', type: 'string', length: 100, nullable: true)]
    private ?string $codigoAlmacen = null;

    public function getIdAlmacen(): ?int { return $this->idAlmacen; }
    public function getCodigoAlmacen(): ?string { return $this->codigoAlmacen; }
    public function setCodigoAlmacen(?string $v): self { $this->codigoAlmacen = $v; return $this; }
}
