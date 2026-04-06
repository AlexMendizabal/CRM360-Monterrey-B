<?php

namespace App\Entity\Comercial;

use App\Repository\Comercial\OfertaRepository;
use Doctrine\ORM\Mapping as ORM;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     schema="Oferta",
 *     description="Oferta/Cotizacion de venta",
 *     @OA\Property(property="id", type="integer"),
 *     @OA\Property(property="montoTotal", type="number", format="float"),
 *     @OA\Property(property="idCliente", type="integer"),
 *     @OA\Property(property="idVendedor", type="integer"),
 *     @OA\Property(property="estadoOferta", type="integer"),
 *     @OA\Property(property="codigoOferta", type="string"),
 *     @OA\Property(property="fechaCreacion", type="string", format="date-time")
 * )
 */
#[ORM\Entity(repositoryClass: OfertaRepository::class)]
#[ORM\Table(name: 'tb_oferta')]
class Oferta
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(name: 'monto_total', type: 'decimal', precision: 15, scale: 2, nullable: true)]
    private ?string $montoTotal = null;

    #[ORM\Column(name: 'monto_total_bruto', type: 'decimal', precision: 15, scale: 2, nullable: true)]
    private ?string $montoTotalBruto = null;

    #[ORM\Column(name: 'peso_total', type: 'decimal', precision: 15, scale: 4, nullable: true)]
    private ?string $pesoTotal = null;

    #[ORM\Column(name: 'descuento_total', type: 'decimal', precision: 15, scale: 2, nullable: true)]
    private ?string $descuentoTotal = null;

    #[ORM\Column(name: 'cantidad_total', type: 'decimal', precision: 15, scale: 4, nullable: true)]
    private ?string $cantidadTotal = null;

    #[ORM\Column(name: 'id_forma_pago', type: 'integer', nullable: true)]
    private ?int $idFormaPago = null;

    #[ORM\Column(name: 'id_lista_precio', type: 'integer', nullable: true)]
    private ?int $idListaPrecio = null;

    #[ORM\Column(name: 'id_cliente', type: 'integer', nullable: true)]
    private ?int $idCliente = null;

    #[ORM\Column(name: 'id_vendedor', type: 'integer', nullable: true)]
    private ?int $idVendedor = null;

    #[ORM\Column(name: 'id_almacen', type: 'integer', nullable: true)]
    private ?int $idAlmacen = null;

    #[ORM\Column(name: 'estado_oferta', type: 'integer', nullable: true)]
    private ?int $estadoOferta = null;

    #[ORM\Column(name: 'tipo_estado', type: 'integer', nullable: true)]
    private ?int $tipoEstado = null;

    #[ORM\Column(name: 'observacion', type: 'text', nullable: true)]
    private ?string $observacion = null;

    #[ORM\Column(name: 'nombre_factura', type: 'string', length: 255, nullable: true)]
    private ?string $nombreFactura = null;

    #[ORM\Column(name: 'codigo_oferta', type: 'string', length: 100, nullable: true)]
    private ?string $codigoOferta = null;

    #[ORM\Column(name: 'nombre_oferta', type: 'string', length: 255, nullable: true)]
    private ?string $nombreOferta = null;

    #[ORM\Column(name: 'fecha_creacion', type: 'datetime', nullable: true)]
    private ?\DateTimeInterface $fechaCreacion = null;

    #[ORM\Column(name: 'fecha_inicial', type: 'date', nullable: true)]
    private ?\DateTimeInterface $fechaInicial = null;

    #[ORM\Column(name: 'fecha_final', type: 'date', nullable: true)]
    private ?\DateTimeInterface $fechaFinal = null;

    #[ORM\Column(name: 'propietario', type: 'integer', nullable: true)]
    private ?int $propietario = null;

    #[ORM\Column(name: 'envio_sap', type: 'integer', nullable: true)]
    private ?int $envioSap = null;

    public function getId(): ?int { return $this->id; }
    public function getMontoTotal(): ?string { return $this->montoTotal; }
    public function setMontoTotal(?string $montoTotal): self { $this->montoTotal = $montoTotal; return $this; }
    public function getMontoTotalBruto(): ?string { return $this->montoTotalBruto; }
    public function setMontoTotalBruto(?string $v): self { $this->montoTotalBruto = $v; return $this; }
    public function getPesoTotal(): ?string { return $this->pesoTotal; }
    public function setPesoTotal(?string $v): self { $this->pesoTotal = $v; return $this; }
    public function getDescuentoTotal(): ?string { return $this->descuentoTotal; }
    public function setDescuentoTotal(?string $v): self { $this->descuentoTotal = $v; return $this; }
    public function getCantidadTotal(): ?string { return $this->cantidadTotal; }
    public function setCantidadTotal(?string $v): self { $this->cantidadTotal = $v; return $this; }
    public function getIdFormaPago(): ?int { return $this->idFormaPago; }
    public function setIdFormaPago(?int $v): self { $this->idFormaPago = $v; return $this; }
    public function getIdListaPrecio(): ?int { return $this->idListaPrecio; }
    public function setIdListaPrecio(?int $v): self { $this->idListaPrecio = $v; return $this; }
    public function getIdCliente(): ?int { return $this->idCliente; }
    public function setIdCliente(?int $v): self { $this->idCliente = $v; return $this; }
    public function getIdVendedor(): ?int { return $this->idVendedor; }
    public function setIdVendedor(?int $v): self { $this->idVendedor = $v; return $this; }
    public function getIdAlmacen(): ?int { return $this->idAlmacen; }
    public function setIdAlmacen(?int $v): self { $this->idAlmacen = $v; return $this; }
    public function getEstadoOferta(): ?int { return $this->estadoOferta; }
    public function setEstadoOferta(?int $v): self { $this->estadoOferta = $v; return $this; }
    public function getTipoEstado(): ?int { return $this->tipoEstado; }
    public function setTipoEstado(?int $v): self { $this->tipoEstado = $v; return $this; }
    public function getObservacion(): ?string { return $this->observacion; }
    public function setObservacion(?string $v): self { $this->observacion = $v; return $this; }
    public function getNombreFactura(): ?string { return $this->nombreFactura; }
    public function setNombreFactura(?string $v): self { $this->nombreFactura = $v; return $this; }
    public function getCodigoOferta(): ?string { return $this->codigoOferta; }
    public function setCodigoOferta(?string $v): self { $this->codigoOferta = $v; return $this; }
    public function getNombreOferta(): ?string { return $this->nombreOferta; }
    public function setNombreOferta(?string $v): self { $this->nombreOferta = $v; return $this; }
    public function getFechaCreacion(): ?\DateTimeInterface { return $this->fechaCreacion; }
    public function setFechaCreacion(?\DateTimeInterface $v): self { $this->fechaCreacion = $v; return $this; }
    public function getFechaInicial(): ?\DateTimeInterface { return $this->fechaInicial; }
    public function setFechaInicial(?\DateTimeInterface $v): self { $this->fechaInicial = $v; return $this; }
    public function getFechaFinal(): ?\DateTimeInterface { return $this->fechaFinal; }
    public function setFechaFinal(?\DateTimeInterface $v): self { $this->fechaFinal = $v; return $this; }
    public function getPropietario(): ?int { return $this->propietario; }
    public function setPropietario(?int $v): self { $this->propietario = $v; return $this; }
    public function getEnvioSap(): ?int { return $this->envioSap; }
    public function setEnvioSap(?int $v): self { $this->envioSap = $v; return $this; }
}
