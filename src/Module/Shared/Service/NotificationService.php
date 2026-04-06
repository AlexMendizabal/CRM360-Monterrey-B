<?php

declare(strict_types=1);

namespace App\Module\Shared\Service;

use Doctrine\DBAL\Connection;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class NotificationService
{
    private Connection $connection;

    public function __construct(Connection $connection)
    {
        $this->connection = $connection;
    }

    public function enviarCorreo($arrayDatos)
    {
        $remitente = $arrayDatos['remitente'];
        $destinatario = $arrayDatos['destinatario'];
        $asunto = $arrayDatos['asunto'];
        $contenido = $arrayDatos['contenido'];

        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();
            $mail->Host       = 'mail.ingbolivia.com'; /* 'mail.monterreysrl.com.bo' */
            $mail->SMTPAuth   = true;
            $mail->Username   = 'testcrm@ingbolivia.com'; /* 'crm360@monterreysrl.com.bo' */
            $mail->Password   = 'Barja1994*';/* 'cccRRRmmm360' */
            $mail->SMTPSecure = 'ssl';
            $mail->Port       = 465;
            $mail->CharSet = 'UTF-8';
            $mail->SMTPKeepAlive = true;
            $mail->SMTPDebug = false;

            /* Desactivar SSL */
            $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                )
            );

            $mail->setFrom($remitente);
            $mail->addAddress($destinatario);
            $mail->isHTML(true);
            $mail->Subject =  $asunto;
            $mail->Body    = $contenido;
            $mail->AltBody =  $contenido;

            if ($mail->send()) {
                return true;
            } else {
                return false;
            }
        } catch (Exception $e) {
            echo "Excepcion capturada: " . $e->getMessage() . "<br>";
            return false;
        }
    }

    public function emailEjecutivo($data)
    {
        try {
            $query = "SELECT ID_ESCR, NM_VEND, NM_RAZA_SOCI, NR_CPF_CNPJ, NM_EMAI, ID_EQUI_VEND
            FROM tb_vend
            WHERE ID_TIPO_VEND != 14";
            $stmt = $this->connection->prepare($query);
            $_result = $stmt->executeQuery();
            $results = $_result->fetchAllAssociative();
            return $results;
        } catch (Exception $e) {

            return false;
        }
    }

    public function correoAutorizacion($nombre_usuario, $url)
    {
        $contenido =
            '<html>
                    <head>
                        <style>
                            /* Estilos para el boton */
                            .button {
                                display: inline-block;
                                padding: 10px 50px;
                                background-color: #28A745; /* Color de fondo del boton */
                                color: #fff; /* Color del texto del boton */
                                text-decoration: none; /* Eliminar subrayado del enlace */
                                border-radius: 5px; /* Bordes redondeados del boton */
                            }

                            /* Cambiar el estilo del boton al pasar el mouse sobre el */
                            .button:hover {
                                background-color: #32CD32; /* Cambiar el color de fondo al pasar el mouse */
                            }
                        </style>
                    </head>
                    <body>
                        <div align="center">
                            <h1>Solicitud pendiente de autorizacion</h1>
                            <p>El usuario: <p style="font-weight: bold">' . $nombre_usuario . '</p> tiene una cotizacion pendiente de autorizacion.</p>
                            <p>Puede ver los detalles en el siguiente enlace:</p>
                            <p ><a href="#" class="button" target="_blank">Verificar</a></p>
                            <br>
                            <img src="' . $url . '" width="250px" height="70px">
                        </div>
                    </body>
                </html>';
        return $contenido;
    }

    public function correoEnvioCredenciales($usuario, $password, $url)
    {
        $contenido =
            '<html>
                    <head>
                        <style>
                            /* Estilos para el boton */
                            .button {
                                display: inline-block;
                                padding: 10px 50px;
                                background-color: #28A745; /* Color de fondo del boton */
                                color: #fff; /* Color del texto del boton */
                                text-decoration: none; /* Eliminar subrayado del enlace */
                                border-radius: 5px; /* Bordes redondeados del boton */
                            }

                            /* Cambiar el estilo del boton al pasar el mouse sobre el */
                            .button:hover {
                                background-color: #32CD32; /* Cambiar el color de fondo al pasar el mouse */
                            }
                        </style>
                    </head>
                    <body>
                        <div align="center">
                            <h1>Bienvenido(a) al sistema CRM360. </h1>
                            <p style="font-size: 15px;">Sus credenciales de acceso son: .</p>
                            <p style="font-weight: bold; font-size: 15px;">Usuario: ' . $usuario . '</p>
                            <p style="font-weight: bold; font-size: 15px;">Contrasena: ' . $password . '</p>
                            <p style="font-size: 13px;">Recuerde cambiar su contrasena al iniciar sesion.</p>
                            <img src="' . $url . '" width="250px" height="70px">
                            <p style="font-size: 13px; font-weight: bold;">Porfavor no responda a este mensaje.</p>

                        </div>
                    </body>
                </html>';
        return $contenido;
    }

    public function correoEstado($nombre_usuario, $estado_oferta, $url)
    {
        $contenido =
            '<html>
                    <head>
                        <style>
                            /* Estilos para el boton */
                            .button {
                                display: inline-block;
                                padding: 10px 50px;
                                background-color: #28A745; /* Color de fondo del boton */
                                color: #fff; /* Color del texto del boton */
                                text-decoration: none; /* Eliminar subrayado del enlace */
                                border-radius: 5px; /* Bordes redondeados del boton */
                            }

                            /* Cambiar el estilo del boton al pasar el mouse sobre el */
                            .button:hover {
                                background-color: #32CD32; /* Cambiar el color de fondo al pasar el mouse */
                            }
                        </style>
                    </head>
                    <body>
                        <div align="center">
                            <h1>Su Solicitud fue ' . $estado_oferta . ' </h1>
                            <p>Por el usuario: <p style="font-weight: bold">' . $nombre_usuario . '</p> </p>
                            <p></p>
                            <p ><a href="#" class="button" target="_blank">' . $estado_oferta . '</a></p>
                            <br>
                            <img src="' . $url . '" width="250px" height="70px">
                        </div>
                    </body>
                </html>';
        return $contenido;
    }
}
