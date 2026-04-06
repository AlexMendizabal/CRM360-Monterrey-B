<?php

namespace App\Entity\Comercial;

use Doctrine\ORM\Mapping as ORM;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     schema="Descuento",
 *     description="Tabla de descuentos por rango/tipo cliente/material",
 *     @OA\Property(property="id", type="integer"),
 *     @OA\Property(property="descuento", type="number", format="float"),
 *     @OA\Property(property="rangoInicial", type="number"),
 *     @OA\Property(property="rangoFinal", type="number")
 * )
 */
#[ORM\Entity]
#[ORM\Table(name: 'TB_DESCUENTO')]
class Descuento
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(name: 'id_departamento', type: 'integer', nullable: true)]
    private ?int $idDepartamento = null;

    #[ORM\Column(name: 'id_tipo_cliente', type: 'integer', nullable: true)]
    private ?int $idTipoCliente = null;

    #[ORM\Column(name: 'id_material', type: 'integer', nullable: true)]
    private ?int $idMaterial = null;

    #[ORM\Column(name: 'codigomaterial', type: 'string', length: 100, nullable: true)]
    private ?string $codigoMaterial = null;

    #[ORM\Column(name: 'rango_inicial', type: 'decimal', precision: 15, scale: 2, nullable: true)]
    private ?string $rangoInicial = null;

    #[ORM\Column(name: 'rango_final', type: 'decimal', precision: 15, scale: 2, nullable: true)]
    private ?string $rangoFinal = null;

    #[ORM\Column(name: 'descuento', type: 'decimal', precision: 10, scale: 2, nullable: true)]
    private ?string $descuento = null;

    #[ORM\Column(name: 'fecha', type: 'datetime', nullable: true)]
    private ?\DateTimeInterface $fecha = null;

    #[ORM\Column(name: 'estado', type: 'integer', nullable: true)]
    private ?int $estado = null;

    public function getId(): ?int { return $this->id; }
    public function getIdDepartamento(): ?int { return $this->idDepartamento; }
    public function setIdDepartamento(?int $v): self { $this->idDepartamento = $v; return $this; }
    public function getIdTipoCliente(): ?int { return $this->idTipoCliente; }
    public function setIdTipoCliente(?int $v): self { $this->idTipoCliente = $v; return $this; }
    public function getIdMaterial(): ?int { return $this->idMaterial; }
    public function setIdMaterial(?int $v): self { $this->idMaterial = $v; return $this; }
    public function getCodigoMaterial(): ?string { return $this->codigoMaterial; }
    public function setCodigoMaterial(?string $v): self { $this->codigoMaterial = $v; return $this; }
    public function getRangoInicial(): ?string { return $this->rangoInicial; }
    public function setRangoInicial(?string $v): self { $this->rangoInicial = $v; return $this; }
    public function getRangoFinal(): ?string { return $this->rangoFinal; }
    public function setRangoFinal(?string $v): self { $this->rangoFinal = $v; return $this; }
    public function getDescuento(): ?string { return $this->descuento; }
    public function setDescuento(?string $v): self { $this->descuento = $v; return $this; }
    public function getFecha(): ?\DateTimeInterface { return $this->fecha; }
    public function setFecha(?\DateTimeInterface $v): self { $this->fecha = $v; return $this; }
    public function getEstado(): ?int { return $this->estado; }
    public function setEstado(?int $v): self { $this->estado = $v; return $this; }
}
