<?php

namespace App\Entity\MTCorp\Logistica\Integracoes\Fusion;

use Doctrine\ORM\Mapping as ORM;
/**
 * @ORM\Entity
 * @ORM\Table(name="MTCORP_MODU_CLIE_BASE")
 */
class Cliente  
{   
    /*
        id_cliente	int	
        prim_nome	nvarchar(MAX)	
        segu_nome	nvarchar(MAX)	
        cnpj_cpf	varchar(18)	
        ie_rg	varchar(52)	
        tipo_pessoa	char(1)	
        id_vendedor	int	
        id_cliente_erp	int	
        id_contribuinte	int	
        id_setor_atividade	int	
        id_fina_material	int	
        id_grupo_econ	int	
        limi_cred	decimal(15, 2)	
        cred_segu	decimal(15, 2)	
        data_cadastro	datetime	
        situacao	int	
        email_nfe	varchar(256)	
        is_carteira	smallint	
        is_descontado	smallint	
        is_avista	smallint	
        is_pesagem	smallint	
        data_prox_anali	datetime	
        data_ult_alte	datetime	
        id_usua_cada	int	
        prod_rural	varchar(512)	
        id_regi_trib	int	
        nr_nota	tinyint	
        in_nota_auto	bit	
        codigo_cliente	varchar(100)	
        tipo_persona	text	
        id_sector_actividad2	int	
        id_regi_trib_m	int	
        id_tipo_cliente	int	
        telefono	varchar(50)	
        celular	varchar(50)	 
    */

    /**
     * @ORM\Id_cliente
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
    */
    /** @var int */
    private $id_cliente;

    /**
     * @ORM\Column(type="string", length=256)
    */
    /** @var string */
    private $prim_nome;
    /**
     * @ORM\Column(type="string", length=256)
    */
    /** @var string */
    private $segu_nome;
    /**
     * @ORM\Column(type="string", length=256)
    */
    /** @var string */
    private $cnpj_cpf;

    /** @var string */
    private $ie_rg;

    /** @var string */
    private $tipo_pessoa;

    /** @var string */
    private $id_vendedor;

    /** @var string */
    private $id_cliente_erp;

    /** @var string */
    private $id_contribuinte;

    /** @var string */
    private $id_setor_atividade;

    /** @var string */
    private $id_fina_material;

    /** @var string */
    private $id_grupo_econ;

    /** @var int */
    private $limi_cred;

    /** @var string */
    private $cred_segu;

    /** @var string */
    private $data_cadastro;

    /** @var string */
    private $email_nfe;

    /** @var string */
    private $is_carteira;

    /** @var string */
    private $is_descontado;

    /** @var string */
    private $is_avista;

    /** @var string */
    private $is_pesagem;

    /** @var string */
    private $data_prox_anali;

    /** @var string */
    private $data_ult_alte;

    /** @var string */
    private $id_usua_cada;

    /** @var string */
    private $prod_rural;

    /** @var string */
    private $id_regi_trib;

    /** @var string */
    private $nr_nota;

    /** @var string */
    private $in_nota_auto;

    /** @var string */
    private $tipo_persona;

    /** @var string */
    private $id_sector_actividad2;

    /** @var string */
    private $id_regi_trib_m;

    /** @var string */
    private $id_tipo_cliente;

    /** @var string */
    private $telefono;

    /** @var string */
    private $celular;


    public function __get($atributo)
    {
        return $this->$atributo;
    }

    public function __set($atributo, $value)
    {
        $this->$atributo = $value;
        return $this;
    }

    public function setValue($atributo, $value)
    {
        $this->$atributo = $value;
        return $this;
    }

    public function jsonSerialize()
    {
        return array(
            "id_cliente"                => $this->id_cliente,
            "prim_nome"                 => $this->prim_nome,
            "segu_nome"                 => $this->segu_nome,
            "cnpj_cpf"                  => $this->cnpj_cpf,
            "ie_rg"                     => $this->ie_rg,
            "tipo_pessoa"               => $this->tipo_pessoa,
            "id_vendedor"               => $this->id_vendedor,
            "id_cliente_erp"            => $this->id_cliente_erp,
            "id_contribuinte"           => $this->id_contribuinte,
            "id_setor_atividade"        => $this->id_setor_atividade,
            "id_fina_material"          => $this->id_fina_material,
            "id_grupo_econ"             => $this->id_grupo_econ,
            "limi_cred"                 => $this->limi_cred,
            "cred_segu"                 => $this->cred_segu,
            "data_cadastro"             => $this->data_cadastro,
            "email_nfe"                 => $this->email_nfe,
            "is_carteira"               => $this->is_carteira,
            "is_descontado"             => $this->is_descontado,
            "is_avista"                 => $this->is_avista,
            "is_pesagem"                => $this->is_pesagem,
            "data_prox_anali"           => $this->data_prox_anali,
            "id_usua_cada"              => $this->id_usua_cada,
            "prod_rural"                => $this->prod_rural,
            "id_regi_trib"              => $this->id_regi_trib,
            "nr_nota"                   => $this->nr_nota,
            "in_nota_auto"              => $this->in_nota_auto,
            "codigo_cliente"            => $this->codigo_cliente,
            "tipo_persona"              => $this->tipo_persona,
            "id_sector_actividad2"      => $this->id_sector_actividad2,
            "id_regi_trib_m"            => $this->id_regi_trib_m,
            "id_tipo_cliente"           => $this->id_tipo_cliente,
            "telefono"                  => $this->telefono,
            "celular"                    => $this->celular,
           
        );
    }
}
