<?php

namespace App\Repository\Comercial;

use App\Entity\Comercial\Vendedor;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class VendedorRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Vendedor::class);
    }

    public function findByCodigoSap(string $codigoSap): ?Vendedor
    {
        return $this->findOneBy(['codigoSap' => $codigoSap]);
    }

    public function findActivos(): array
    {
        return $this->createQueryBuilder('v')
            ->where('v.idTipoVend != 14')
            ->orderBy('v.nmVend', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findByEscritorio(int $idEscr): array
    {
        return $this->createQueryBuilder('v')
            ->where('v.idEscr = :escr')
            ->setParameter('escr', $idEscr)
            ->getQuery()
            ->getResult();
    }
}
