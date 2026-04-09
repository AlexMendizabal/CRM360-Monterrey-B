<?php

namespace App\Entity\Shared;

use App\Repository\Shared\CiudadRepository;
use Doctrine\ORM\Mapping as ORM;
use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     schema="Ciudad",
 *     description="Ciudad/Localidad",
 *     @OA\Property(property="id", type="integer"),
 *     @OA\Property(property="nombreCiudad", type="string"),
 *     @OA\Property(property="sigla", type="string")
 * )
 */
#[ORM\Entity(repositoryClass: CiudadRepository::class)]
#[ORM\Table(name: 'TB_CIUDAD')]
class Ciudad
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(name: 'nombre_ciudad', type: 'string', length: 255, nullable: true)]
    private ?string $nombreCiudad = null;

    #[ORM\Column(name: 'sigla', type: 'string', length: 50, nullable: true)]
    private ?string $sigla = null;

    public function getId(): ?int { return $this->id; }
    public function getNombreCiudad(): ?string { return $this->nombreCiudad; }
    public function setNombreCiudad(?string $nombreCiudad): self { $this->nombreCiudad = $nombreCiudad; return $this; }
    public function getSigla(): ?string { return $this->sigla; }
    public function setSigla(?string $sigla): self { $this->sigla = $sigla; return $this; }
}
