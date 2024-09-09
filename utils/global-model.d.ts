interface QueryParams {
    page: string;
    size: string;
    search: string;
    sortKey: string;
    sortOrder: string;
}

interface User {
    created_at: string;  // Fecha de creación
    deleted_at: string | null;  // Fecha de eliminación, puede ser null
    email: string;  // Dirección de correo electrónico
    email_verified_at: string;  // Fecha de verificación del correo electrónico
    id: number;  // ID del usuario
    lastname: string;  // Apellido del usuario
    name: string;  // Nombre del usuario
    phone: string;  // Número de teléfono del usuario
    role: number;  // Rol del usuario, se asume que es un número
    updated_at: string;  // Fecha de última actualización
  }