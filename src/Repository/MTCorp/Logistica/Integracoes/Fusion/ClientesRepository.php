<?php

namespace App\Repository\MTCorp\Logistica\Integracoes\Fusion;

use Doctrine\DBAL\Driver\Connection;

class ClientesRepository
{

    /**  @var Connection */
    private $connection;

    /** @var string */
    private $pedidos;

    public function getClientes(Connection $connection)
    {

        // Captura os dados dos clientes que serão integrados
        $query = <<<SQL
            SELECT
                TOP 1
                CLIE.CODIGOCLIENTE	[CD_CLIE],
                CLIE.NOMEGUERRA		[NM_FANT_CLIE],
                CLIE.RAZAOSOCIAL	[NM_CLIE],
                CLIE.CGC			[CD_CLIE_CNPJ_CPF],
                OBRA.CEPCLIENTE		[CD_CEP],
                OBRA.ENDERECO		[DS_LOCA_ENTR],
                OBRA.BAIRRO			[DS_BAIR],
                OBRA.CIDADE			[DS_CIDA],
                OBRA.CODIGOUF		[DS_ESTA],
                CONCAT(
                    IIF(OBRA.EntregaDomingo	= 1, '7', ''),
                    IIF(OBRA.EntregaSegunda	= 1, '1', ''),
                    IIF(OBRA.EntregaTerca	= 1, '2', ''),
                    IIF(OBRA.EntregaQuarta	= 1, '3', ''),
                    IIF(OBRA.EntregaQuinta	= 1, '4', ''),
                    IIF(OBRA.EntregaSexta	= 1, '5', ''),
                    IIF(OBRA.EntregaSabado	= 1, '6', ''),
                    'D',
                    CONVERT(VARCHAR, TIMEFROMPARTS(7, 0, 0, 0, 0), 108),
                    '-',
                    CONVERT(VARCHAR, dbo.FNC_MTCORP_CLARION_ConverterDataHoraClarionParaDateTime(1, OBRA.HorarioMaximoDescarga), 108)
                ) AS						[DS_INTE_ENTR],
                OBRA.LatitudeDecimal		[LATI],
                OBRA.LongitudeDecimal		[LONG],
                REGI.CodigoRegiaoEntrega	[CD_REGI_ENTR],
                REGI.Descricao				[DS_REGI_ENTR],
                IIF(REGI.CodigoRegiaoEntrega IN (150, 160, 167, 176), REGI.CodigoRegiaoEntrega, OBRA.CODIGOIBGE) 				[DS_PRAC],
                IIF(REGI.CodigoRegiaoEntrega IN (150, 160, 167, 176), REGI.Descricao COLLATE DATABASE_DEFAULT , OBRA.CIDADE) 	[CD_PRAC],
                NULL CD_SEGM,
                NULL DS_SEGM
            FROM
                            LS_TIDSOFTWARE.EXETPS.dbo.Clientes					CLIE
                INNER JOIN	LS_TIDSOFTWARE.EXETPS.dbo.ClientesObras				OBRA ON OBRA.CODIGOCLIENTE			= CLIE.CODIGOCLIENTE
                INNER JOIN	LS_TIDSOFTWARE.EXETPS.dbo.CadastroRegioesEntrega	REGI ON REGI.CodigoRegiaoEntrega	= OBRA.CODIGOREGIAOENTREGA
                INNER JOIN	LS_TIDSOFTWARE.EMP18.dbo.ClientesPropostas			PROP ON PROP.CODIGOCLIENTE			= CLIE.CODIGOCLIENTE
            WHERE
                PROP.NUMEROPROPOSTA IN('{$pedidos}')
        SQL;
        
        return $query;

        $cliente = $connection->query($query)->fetch();

        return $cliente;
    }

    public function __get($atributo)
    {
        return $this->$atributo;
    }

    public function setValue($atributo, $valor)
    {
        $this->$atributo = $valor;
        return $this;
    }
}
