<?php

namespace App\Repository\Comercial;

use App\Entity\Comercial\Cliente;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class ClienteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Cliente::class);
    }

    public function findByIdCliente(int $idCliente): ?Cliente
    {
        return $this->findOneBy(['idCliente' => $idCliente]);
    }

    public function findByCnpjCpf(string $cnpjCpf): array
    {
        return $this->createQueryBuilder('c')
            ->where('c.cnpjCpf LIKE :cnpj')
            ->setParameter('cnpj', '%' . $cnpjCpf . '%')
            ->getQuery()
            ->getResult();
    }

    public function findByCodigoCliente(string $codigo): ?Cliente
    {
        return $this->findOneBy(['codigoCliente' => $codigo]);
    }

    public function findByVendedor(int $idVendedor): array
    {
        return $this->createQueryBuilder('c')
            ->where('c.idVendedor = :vendedor')
            ->setParameter('vendedor', $idVendedor)
            ->orderBy('c.primNome', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function countByCodigoCliente(string $codigo): int
    {
        return (int) $this->createQueryBuilder('c')
            ->select('COUNT(c.idCliente)')
            ->where('c.codigoCliente = :codigo')
            ->setParameter('codigo', $codigo)
            ->getQuery()
            ->getSingleScalarResult();
    }

    public function findLastCodigoCliente(): ?string
    {
        return $this->createQueryBuilder('c')
            ->select('c.codigoCliente')
            ->orderBy('c.codigoCliente', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getSingleScalarResult();
    }
}
