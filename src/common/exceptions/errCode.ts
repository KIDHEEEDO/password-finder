export const enum ErrCode {
    BAD_REQUEST = '01',
    UNAUTHORIZED = '02',
    PAYMENT_REQUIRED = '03',
    FORBIDDEN = '04',
    NOT_FOUND = '05',
    METHOD_NOT_ALLOWED = '06',
    NOT_ACCEPTABLE = '07',
    PROXY_AUTHENTICATION_REQUIRED = '08',
    REQUEST_TIMEOUT = '09',
    CONFLICT = '10',
    EMAIL_CONFLICT = '10-1',
    GONE = '11',
    LENGTH_REQUIRED = '12',
    PRECONDITION_FAILED = '13',
    PAYLOAD_TOO_LARGE = '14',
    URI_TOO_LONG = '15',
    UNSUPPORTED_MEDIA_TYPE = '16',
    REQUESTED_RANGE_NOT_SATISFIABLE = '17',
    EXPECTATION_FAILED = '18',
    I_AM_A_TEAPOT = '19',
    MISDIRECTED = '20',
    UNPROCESSABLE_ENTITY = '21',
    FAILED_DEPENDENCY = '22',
    PRECONDITION_REQUIRED = '23',
    TOO_MANY_REQUESTS = '24',
    INTERNAL_SERVER_ERROR = '25',
    NOT_IMPLEMENTED = '26',
    BAD_GATEWAY = '27',
    SERVICE_UNAVAILABLE = '28',
    GATEWAY_TIMEOUT = '29',
    HTTP_VERSION_NOT_SUPPORTED = '30',
    INVALID_PATH = '31',
}
