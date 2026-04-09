<?php

namespace App\Entity\Logistica;

use Doctrine\ORM\Mapping as ORM;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     schema="DepoFisiEsto",
 *     description="Deposito fisico/Almacen logistico",
 *     @OA\Property(property="id", type="integer"),
 *     @OA\Property(property="codigoAlmacen", type="string"),
 *     @OA\Property(property="nombreDeposito", type="string"),
 *     @OA\Property(property="estadoDeposito", type="integer")
 * )
 */
#[ORM\Entity]
#[ORM\Table(name: 'TB_DEPO_FISI_ESTO')]
class DepoFisiEsto
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(name: 'codigo_almacen', type: 'string', length: 100, nullable: true)]
    private ?string $codigoAlmacen = null;

    #[ORM\Column(name: 'NOMBRE_DEPOSITO', type: 'string', length: 255, nullable: true)]
    private ?string $nombreDeposito = null;

    #[ORM\Column(name: 'id_ciudad', type: 'integer', nullable: true)]
    private ?int $idCiudad = null;

    #[ORM\Column(name: 'SUCURSAL_ID', type: 'integer', nullable: true)]
    private ?int $sucursalId = null;

    #[ORM\Column(name: 'id_departamento', type: 'integer', nullable: true)]
    private ?int $idDepartamento = null;

    #[ORM\Column(name: 'ESTADO_DEPOSITO', type: 'integer', nullable: true)]
    private ?int $estadoDeposito = null;

    #[ORM\Column(name: 'latitud', type: 'decimal', precision: 18, scale: 10, nullable: true)]
    private ?string $latitud = null;

    #[ORM\Column(name: 'longitud', type: 'decimal', precision: 18, scale: 10, nullable: true)]
    private ?string $longitud = null;

    public function getId(): ?int { return $this->id; }
    public function getCodigoAlmacen(): ?string { return $this->codigoAlmacen; }
    public function setCodigoAlmacen(?string $v): self { $this->codigoAlmacen = $v; return $this; }
    public function getNombreDeposito(): ?string { return $this->nombreDeposito; }
    public function setNombreDeposito(?string $v): self { $this->nombreDeposito = $v; return $this; }
    public function getIdCiudad(): ?int { return $this->idCiudad; }
    public function setIdCiudad(?int $v): self { $this->idCiudad = $v; return $this; }
    public function getSucursalId(): ?int { return $this->sucursalId; }
    public function setSucursalId(?int $v): self { $this->sucursalId = $v; return $this; }
    public function getIdDepartamento(): ?int { return $this->idDepartamento; }
    public function setIdDepartamento(?int $v): self { $this->idDepartamento = $v; return $this; }
    public function getEstadoDeposito(): ?int { return $this->estadoDeposito; }
    public function setEstadoDeposito(?int $v): self { $this->estadoDeposito = $v; return $this; }
    public function getLatitud(): ?string { return $this->latitud; }
    public function setLatitud(?string $v): self { $this->latitud = $v; return $this; }
    public function getLongitud(): ?string { return $this->longitud; }
    public function setLongitud(?string $v): self { $this->longitud = $v; return $this; }
}
