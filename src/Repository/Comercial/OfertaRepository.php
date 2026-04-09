<?php

namespace App\Repository\Comercial;

use App\Entity\Comercial\Oferta;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class OfertaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Oferta::class);
    }

    public function findByCliente(int $idCliente): array
    {
        return $this->createQueryBuilder('o')
            ->where('o.idCliente = :cliente')
            ->setParameter('cliente', $idCliente)
            ->orderBy('o.fechaCreacion', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function findByVendedor(int $idVendedor): array
    {
        return $this->createQueryBuilder('o')
            ->where('o.idVendedor = :vendedor')
            ->setParameter('vendedor', $idVendedor)
            ->orderBy('o.fechaCreacion', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function findByEstado(int $estadoOferta): array
    {
        return $this->createQueryBuilder('o')
            ->where('o.estadoOferta = :estado')
            ->setParameter('estado', $estadoOferta)
            ->orderBy('o.fechaCreacion', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function findByClienteAndEstado(int $idCliente, int $tipoEstado): ?Oferta
    {
        return $this->createQueryBuilder('o')
            ->where('o.idCliente = :cliente')
            ->andWhere('o.tipoEstado = :estado')
            ->setParameter('cliente', $idCliente)
            ->setParameter('estado', $tipoEstado)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
