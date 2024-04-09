<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Integracoes\Akna;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpClient\HttpClient;

class AknaConfig extends AbstractController
{
    /** @var HttpClient */
    protected $httpClient;

    /** @var string */
    protected $url;

    /** @var string */
    protected $user;

    /** @var string */
    protected $password;

    /** @var string */
    protected $client;

    public function __construct()
    {
        $this->httpClient = HttpClient::create();
        $this->user     = 'paulo.mota@mtcorp.com.br';
        $this->password = '57b609e138732ebeaea7d77acdaad016';
        $this->client   = '22671';
        $this->url      = 'https://app.akna.com.br/emkt/int/integracao.php';
    }

    public function buildData(string $xml)
    {
        return [
            'body' => [
                'User'    => $this->user,
                'Pass'    => $this->password,
                'Client'  => $this->client,
                'XML'     => $xml
            ]
        ];
    }

    // Retorna o Nome das Listas Cadastradas no Sistema AKNA //
    public function buildGetListasContatos()
    {
        return "
            <main>
                <emkt trans='11.02'>
                </emkt>
            </main>";
    }

    // Importação de Arquivo para a Lista na AKNA //
    public function buildPostListasContatos()
    {
        // PRECISA DEFINIR QUAIS INFORMAÇÕES A SEREM GRAVADAS. //
        return "
            <main>
                <emkt trans='11.10'>
                </emkt>
            </main>";
    }

    // Lista de Mensagens Cadastradas na AKNA //
    public function buildGetListaMensagens()
    {
        return <<<XML
            <main>
                <emkt trans='15.50'>
                </emkt>
            </main>
        XML;
    }

    // Inclui de uma Ação Transacional na AKNA //
    public function buildPostAcaoTransacional($params)
    {
        return <<<XML
            <main>
                <emkt trans="19.04">
                    <nome>{$params['nome']}</nome>
                    <mensagem url="false">{$params['mensagem']}</mensagem>
                    <nome_remetente>{$params['nomeRemetente']}</nome_remetente>
                    <email_remetente>{$params['emailRemetente']}</email_remetente>
                    <email_retorno>{$params['emailRetorno']}</email_retorno>
                    <assunto>{$params['assunto']}</assunto>
                </emkt>
            </main>
        XML;
    }

    // Dispara de uma Ação Transacional na AKNA //
    public function buildSendAcaoTransacional($params)
    {
        return <<<XML
            <main>
                <emkt trans="20.05">
                    <acao>{$params['nomeAcao']}</acao>
                    <destinatario>
                        <nome>{$params['nomeCliente']}</nome>
                        <email>{$params['emailCliente']}</email>
                    </destinatario>
                </emkt>
            </main>
        XML;
    }

    public function gravaLog($params)
    {
        print_r($params);
        exit;
    }

    public function buildListasContatos()
    {
        return <<<XML
            <main>
                <emkt trans='11.02'>
                </emkt>
            </main>
        XML;   
    }
}
