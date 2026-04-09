<?php

declare(strict_types=1);

namespace App\Module\Shared\Service;

/**
 * Plantillas HTML para emails del CRM360.
 * Extraido de Helper.php (correoAutorizacion, correoEnvioCredenciales, correoEstado).
 */
class EmailTemplateService
{
    public function autorizacionPendiente(string $nombreUsuario, string $logoUrl): string
    {
        return $this->renderTemplate(
            'Solicitud pendiente de autorizacion',
            '<p>El usuario: <strong>' . htmlspecialchars($nombreUsuario) . '</strong> tiene una cotizacion pendiente de autorizacion.</p>
             <p>Puede ver los detalles en el siguiente enlace:</p>
             <p><a href="#" class="button" target="_blank">Verificar</a></p>',
            $logoUrl
        );
    }

    public function envioCredenciales(string $usuario, string $password, string $logoUrl): string
    {
        return $this->renderTemplate(
            'Bienvenido(a) al sistema CRM360.',
            '<p style="font-size: 15px;">Sus credenciales de acceso son:</p>
             <p style="font-weight: bold; font-size: 15px;">Usuario: ' . htmlspecialchars($usuario) . '</p>
             <p style="font-weight: bold; font-size: 15px;">Contrasena: ' . htmlspecialchars($password) . '</p>
             <p style="font-size: 13px;">Recuerde cambiar su contrasena al iniciar sesion.</p>',
            $logoUrl,
            false
        );
    }

    public function cambioEstado(string $nombreUsuario, string $estadoOferta, string $logoUrl): string
    {
        return $this->renderTemplate(
            'Su Solicitud fue ' . htmlspecialchars($estadoOferta),
            '<p>Por el usuario: <strong>' . htmlspecialchars($nombreUsuario) . '</strong></p>
             <p><a href="#" class="button" target="_blank">' . htmlspecialchars($estadoOferta) . '</a></p>',
            $logoUrl
        );
    }

    private function renderTemplate(string $titulo, string $cuerpo, string $logoUrl, bool $showButton = true): string
    {
        return '<html>
            <head>
                <style>
                    .button {
                        display: inline-block;
                        padding: 10px 50px;
                        background-color: #28A745;
                        color: #fff;
                        text-decoration: none;
                        border-radius: 5px;
                    }
                    .button:hover { background-color: #32CD32; }
                </style>
            </head>
            <body>
                <div align="center">
                    <h1>' . $titulo . '</h1>
                    ' . $cuerpo . '
                    <br>
                    <img src="' . htmlspecialchars($logoUrl) . '" width="250px" height="70px">
                    <p style="font-size: 13px; font-weight: bold;">Por favor no responda a este mensaje.</p>
                </div>
            </body>
        </html>';
    }
}
