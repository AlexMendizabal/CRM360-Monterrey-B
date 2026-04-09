<?php

namespace App\Services;

use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mime\Address;

/**
 * Servicio centralizado de envio de email.
 * Reemplaza a SendEmailController y los metodos sendSwiftMail* de FunctionsController.
 * Usa Symfony Mailer (no SwiftMailer) para compatibilidad con Symfony 5.3+.
 */
class MailerService
{
    private MailerInterface $mailer;
    private string $defaultFrom;

    public function __construct(MailerInterface $mailer, string $defaultFrom = 'ws@manetoni.com.br')
    {
        $this->mailer = $mailer;
        $this->defaultFrom = $defaultFrom;
    }

    /**
     * Envia un email con contenido HTML o texto plano.
     *
     * @param bool   $isHtml   true para text/html, false para text/plain
     * @param string $body     Contenido del email
     * @param string $subject  Asunto del email
     * @param array  $emails   Array con key "to" => [...emails] o array plano de emails
     * @param string|null $from Email del remitente (usa default si no se especifica)
     */
    public function send(bool $isHtml, string $body, string $subject, array $emails, ?string $from = null): void
    {
        $recipients = isset($emails['to']) ? $emails['to'] : $emails;

        if (empty($recipients)) {
            return;
        }

        $email = (new Email())
            ->from(new Address($from ?? $this->defaultFrom))
            ->subject($subject);

        if (is_array($recipients)) {
            foreach ($recipients as $recipient) {
                $email->addTo($recipient);
            }
        } else {
            $email->to($recipients);
        }

        if ($isHtml) {
            $email->html($body);
        } else {
            $email->text($body);
        }

        $this->mailer->send($email);
    }

    /**
     * Envia un email con archivo adjunto.
     *
     * @param bool   $isHtml  true para text/html, false para text/plain
     * @param string $body    Contenido del email
     * @param string $subject Asunto del email
     * @param array  $emails  Array de emails destinatarios
     * @param string|array $attachmentPaths Ruta(s) al archivo adjunto
     * @param string|null $from Email del remitente
     */
    public function sendWithAttachment(
        bool $isHtml,
        string $body,
        string $subject,
        array $emails,
        $attachmentPaths,
        ?string $from = null
    ): void {
        $recipients = isset($emails['to']) ? $emails['to'] : $emails;

        if (empty($recipients)) {
            return;
        }

        $email = (new Email())
            ->from(new Address($from ?? $this->defaultFrom))
            ->subject($subject);

        if (is_array($recipients)) {
            foreach ($recipients as $recipient) {
                $email->addTo($recipient);
            }
        } else {
            $email->to($recipients);
        }

        if ($isHtml) {
            $email->html($body);
        } else {
            $email->text($body);
        }

        // Adjuntar archivos
        $paths = is_array($attachmentPaths) ? $attachmentPaths : [$attachmentPaths];
        foreach ($paths as $path) {
            if (file_exists($path)) {
                $email->attachFromPath($path);
            }
        }

        $this->mailer->send($email);
    }
}
