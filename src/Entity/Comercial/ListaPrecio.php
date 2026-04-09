<?php

namespace App\Entity\Comercial;

use Doctrine\ORM\Mapping as ORM;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     schema="ListaPrecio",
 *     description="Lista de precios por departamento",
 *     @OA\Property(property="id", type="integer"),
 *     @OA\Property(property="nombreLista", type="string"),
 *     @OA\Property(property="idDepartamento", type="integer")
 * )
 */
#[ORM\Entity]
#[ORM\Table(name: 'TB_LISTA_PRECIO')]
class ListaPrecio
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(name: 'nombre_lista', type: 'string', length: 255, nullable: true)]
    private ?string $nombreLista = null;

    #[ORM\Column(name: 'id_departamento', type: 'integer', nullable: true)]
    private ?int $idDepartamento = null;

    public function getId(): ?int { return $this->id; }
    public function getNombreLista(): ?string { return $this->nombreLista; }
    public function setNombreLista(?string $v): self { $this->nombreLista = $v; return $this; }
    public function getIdDepartamento(): ?int { return $this->idDepartamento; }
    public function setIdDepartamento(?int $v): self { $this->idDepartamento = $v; return $this; }
}
