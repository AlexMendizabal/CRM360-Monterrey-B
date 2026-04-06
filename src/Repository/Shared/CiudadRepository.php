<?php

namespace App\Repository\Shared;

use App\Entity\Shared\Ciudad;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class CiudadRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Ciudad::class);
    }

    public function findByNombre(string $nombre): ?Ciudad
    {
        return $this->createQueryBuilder('c')
            ->where('c.nombreCiudad = :nombre')
            ->setParameter('nombre', $nombre)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findByNombreOrSigla(string $valor): ?Ciudad
    {
        return $this->createQueryBuilder('c')
            ->where('c.nombreCiudad LIKE :valor OR c.sigla LIKE :valor')
            ->setParameter('valor', $valor)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findBySigla(string $sigla): ?Ciudad
    {
        return $this->createQueryBuilder('c')
            ->where('c.sigla LIKE :sigla')
            ->setParameter('sigla', '%' . $sigla)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
