<?php

declare(strict_types=1);

namespace App\Module\Comercial\Controller;

use App\Module\Comercial\Service\AgendaService;
use App\Module\Comercial\DTO\CompromissoCreateDTO;
use App\Module\Comercial\DTO\CompromissoReagendarDTO;
use App\Module\Comercial\DTO\ReporteAgendaDTO;
use App\Module\Shared\Response\ApiResponse;
use App\Module\Shared\Validation\RequestValidator;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\ComercialController;
use Doctrine\DBAL\Connection;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class AgendaController extends AbstractController
{
    public function __construct(
        private readonly AgendaService $agendaService,
        private readonly RequestValidator $validator
    ) {}

    public function getAcessos(Connection $connection, Request $request): JsonResponse
    {
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
        $simuladorVendas = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'HOMO_CICL_VEND');

        return ApiResponse::success(['simuladorVendas' => $simuladorVendas]);
    }

    public function getCompromissos(Request $request): JsonResponse
    {
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
        $params = $request->query->all();

        $resultado = $this->agendaService->listarCompromissos(
            $params['idVendedor'] ?? $infoUsuario->matricula,
            $params['inicio'],
            $params['fim'],
            $params['tipo_compromiso'] ?? ''
        );

        return ApiResponse::success($resultado);
    }

    public function getCompromisoApi(Request $request): JsonResponse
    {
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
        $params = $request->query->all();

        $inicio = date('Y-m-d', strtotime($params['inicio']));
        if ($inicio === '1969-12-31') {
            return ApiResponse::error('Fecha de inicio invalida');
        }

        $resultado = $this->agendaService->listarCompromissosApi(
            $params['idVendedor'] ?? $infoUsuario->matricula,
            $params['inicio'],
            $params['fim'],
            $params['tipo_compromiso'] ?? ''
        );

        return ApiResponse::success($resultado);
    }

    public function getCompromisso(int $id): JsonResponse
    {
        $resultado = $this->agendaService->obtenerCompromisso($id);
        return ApiResponse::success($resultado);
    }

    public function saveCompromisso(Request $request): JsonResponse
    {
        $dto = $this->validator->validateRequest($request, CompromissoCreateDTO::class);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        $result = $this->agendaService->crearCompromisso($dto->toArray(), $infoUsuario);

        if (!$result['success']) {
            return ApiResponse::error($result['message']);
        }

        return ApiResponse::created(['id_agenda' => $result['idAgenda']]);
    }

    public function actualizarCompromiso(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true) ?? [];
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        $success = $this->agendaService->actualizarCompromisso($data, $infoUsuario);

        return $success
            ? ApiResponse::success(null, message: 'Compromiso actualizado')
            : ApiResponse::error('No se pudo actualizar el compromiso');
    }

    public function eliminarCompromiso(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true) ?? [];
        $success = $this->agendaService->eliminarCompromisso((int)$data['id']);

        return $success
            ? ApiResponse::success(null, message: 'Compromiso eliminado')
            : ApiResponse::error('No se pudo eliminar el compromiso');
    }

    public function rescheduleCompromisso(Request $request): JsonResponse
    {
        $dto = $this->validator->validateRequest($request, CompromissoReagendarDTO::class);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        $success = $this->agendaService->reagendarCompromisso($dto->toArray(), $infoUsuario);

        return $success
            ? ApiResponse::success(null, message: 'Compromiso reagendado')
            : ApiResponse::error('No se pudo reagendar el compromiso');
    }

    public function deleteCompromisso(Request $request, int $id): JsonResponse
    {
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
        $success = $this->agendaService->eliminarConVendedor($id, $infoUsuario->matricula);

        return $success
            ? ApiResponse::success(null, message: 'Compromiso eliminado')
            : ApiResponse::error('No se pudo eliminar el compromiso');
    }

    public function reporteAgenda(Request $request): JsonResponse
    {
        $dto = $this->validator->validateRequest($request, ReporteAgendaDTO::class);
        $resultado = $this->agendaService->reporteAgenda($dto->toArray());
        return ApiResponse::success($resultado);
    }

    public function reporteCliente(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true) ?? [];
        $idCliente = (int)($data['id'] ?? 0);
        $resultado = $this->agendaService->reporteCliente($idCliente);
        return ApiResponse::success($resultado);
    }

    public function estadosAgenda(): JsonResponse
    {
        $estados = $this->agendaService->obtenerEstados();
        return ApiResponse::success($estados);
    }

    public function getImagenes(int $id): JsonResponse
    {
        $imagenes = $this->agendaService->obtenerImagenes($id);
        return empty($imagenes)
            ? ApiResponse::success([], message: 'Sin imagenes')
            : ApiResponse::success($imagenes);
    }

    public function finalizarCompromisso(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true) ?? [];
        $success = $this->agendaService->finalizarCompromisso($data);

        return $success
            ? ApiResponse::success(null, message: 'Compromiso finalizado')
            : ApiResponse::error('No se pudo finalizar el compromiso');
    }

    public function getrutasVendedor(int $id): JsonResponse
    {
        $rutas = $this->agendaService->obtenerRutasVendedor($id);
        return ApiResponse::success($rutas);
    }

    public function rutasVendedor(Request $request): JsonResponse
    {
        $datos = json_decode($request->getContent(), true) ?? [];
        $success = $this->agendaService->guardarRutas($datos['lista'] ?? []);

        return $success
            ? ApiResponse::success(null, message: 'Rutas guardadas')
            : ApiResponse::error('Error al guardar rutas');
    }

    public function procesoCompromiso(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true) ?? [];
        $success = $this->agendaService->procesoCompromiso(
            (int)($data['id_agenda'] ?? 0),
            isset($data['id_vendedor']) ? (int)$data['id_vendedor'] : null
        );

        return $success
            ? ApiResponse::success(null, message: 'Compromiso en proceso')
            : ApiResponse::error('Error de registro');
    }

    public function verificarInicio(Request $request): JsonResponse
    {
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
        $params = $request->query->all();

        $idVendedor = (int)($params['id_vendedor'] ?? $infoUsuario->matricula);
        $idAgenda = (int)($params['id_agenda'] ?? 0);

        $tieneIniciadas = $this->agendaService->verificarInicio($idVendedor, $idAgenda);

        return $tieneIniciadas
            ? ApiResponse::success(['tiene_iniciadas' => true], message: 'Tiene agendas iniciadas')
            : ApiResponse::success(['tiene_iniciadas' => false], message: 'No tiene agendas iniciadas');
    }

    // Catalogo endpoints
    public function getFormasContato(): JsonResponse
    {
        return ApiResponse::success($this->agendaService->obtenerFormasContato());
    }

    public function getOrigensContato(): JsonResponse
    {
        return ApiResponse::success($this->agendaService->obtenerOrigensContato());
    }

    public function getMotivosReagendamento(): JsonResponse
    {
        return ApiResponse::success($this->agendaService->obtenerMotivosReagendamento());
    }
}
