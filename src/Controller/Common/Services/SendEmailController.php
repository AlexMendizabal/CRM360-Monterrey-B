<?php

namespace App\Controller\Common\Services;

class SendEmailController
{

    /** @var array */
    private $attachmentPath;

    /** @var string */
    private $body;

    /** @var string */
    private $email;

    /** @var string */
    private $title;

    /** @var string */
    private $password;

    /** @var string */
    private $host       = "outlook.office365.com";

    /** @var int */
    private $port       = 587;

    /** @var string */
    private $encryption = "tls";

    /** @var string */
    private $userName   = NULL;

    /** @var array */
    private $setTo;

    public function send()
    {
        // Create the Transport
        $transport = (new \Swift_SmtpTransport($this->host, $this->port, $this->encryption))
            ->setUsername($this->email)
            ->setPassword($this->password);

        // Create the Mailer using your created Transport
        $mailer = new \Swift_Mailer($transport);

        // Create a message
        $message = (new \Swift_Message($this->title))
            ->setFrom([$this->email => $this->userName])
            ->setTo($this->setTo)
            ->setBody($this->body);

        foreach ($this->attachmentPath as $key => $value) {
            $message->attach(\Swift_Attachment::fromPath($value));
        }

        // Send the message
        $mailer->send($message);

        return $mailer;
    }
}
