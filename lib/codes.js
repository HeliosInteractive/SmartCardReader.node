let codes = new Map();

codes.set(-2146435071, 'SCARD_F_INTERNAL_ERROR');// An internal consistency check failed.
codes.set(-2146435070, 'SCARD_E_CANCELLED');// The action was cancelled by an SCardCancel request.
codes.set(-2146435069, 'SCARD_E_INVALID_HANDLE');// The supplied handle was invalid.
codes.set(-2146435068, 'SCARD_E_INVALID_PARAMETER');// One or more of the supplied parameters could not be properly interpreted.
codes.set(-2146435067, 'SCARD_E_INVALID_TARGET');// Registry startup information is missing or invalid.
codes.set(-2146435066, 'SCARD_E_NO_MEMORY');// Not enough memory available to complete this command.
codes.set(-2146435065, 'SCARD_F_WAITED_TOO_LONG');// An internal consistency timer has expired.
codes.set(-2146435064, 'SCARD_E_INSUFFICIENT_BUFFER');// The data buffer to receive returned data is too small for the returned data.
codes.set(-2146435063, 'SCARD_E_UNKNOWN_READER');// The specified reader name is not recognized.
codes.set(-2146435062, 'SCARD_E_TIMEOUT');// The user-specified timeout value has expired.
codes.set(-2146435061, 'SCARD_E_SHARING_VIOLATION');// The smart card cannot be accessed because of other connections outstanding.
codes.set(-2146435060, 'SCARD_E_NO_SMARTCARD');// The operation requires a Smart Card, but no Smart Card is currently in the device.
codes.set(-2146435059, 'SCARD_E_UNKNOWN_CARD');// The specified smart card name is not recognized.
codes.set(-2146435058, 'SCARD_E_CANT_DISPOSE');// The system could not dispose of the media in the requested manner.
codes.set(-2146435057, 'SCARD_E_PROTO_MISMATCH');// The requested protocols are incompatible with the protocol currently in use with the smart card.
codes.set(-2146435056, 'SCARD_E_NOT_READY');// The reader or smart card is not ready to accept commands.
codes.set(-2146435055, 'SCARD_E_INVALID_VALUE');// 	One or more of the supplied parameters values could not be properly interpreted.
codes.set(-2146435054, 'SCARD_E_SYSTEM_CANCELLED');// The action was cancelled by the system, presumably to log off or shut down.
codes.set(-2146435053, 'SCARD_F_COMM_ERROR');// An internal communications error has been detected.
codes.set(-2146435052, 'SCARD_F_UNKNOWN_ERROR');// An internal error has been detected, but the source is unknown.
codes.set(-2146435051, 'SCARD_E_INVALID_ATR');// An ATR obtained from the registry is not a valid ATR string.
codes.set(-2146435050, 'SCARD_E_NOT_TRANSACTED');// An attempt was made to end a non-existent transaction.
codes.set(-2146435049, 'SCARD_E_READER_UNAVAILABLE');// 	The specified reader is not currently available for use.
codes.set(-2146435048, 'SCARD_P_SHUTDOWN');// The operation has been aborted to allow the server application to exit.
codes.set(-2146435047, 'SCARD_E_PCI_TOO_SMALL');// The PCI Receive buffer was too small.
codes.set(-2146435046, 'SCARD_E_READER_UNSUPPORTED');// The reader driver does not meet minimal requirements for support.
codes.set(-2146435045, 'SCARD_E_DUPLICATE_READER');// The reader driver did not produce a unique reader name.
codes.set(-2146435044, 'SCARD_E_CARD_UNSUPPORTED');// The smart card does not meet minimal requirements for support.
codes.set(-2146435043, 'SCARD_E_NO_SERVICE');// The Smart card resource manager is not running.
codes.set(-2146435042, 'SCARD_E_SERVICE_STOPPED');// The Smart card resource manager has shut down.
codes.set(-2146435041, 'SCARD_E_UNEXPECTED');// An unexpected card error has occurred.
codes.set(-2146435040, 'SCARD_E_ICC_INSTALLATION');// No Primary Provider can be found for the smart card.
codes.set(-2146435039, 'SCARD_E_ICC_CREATEORDER');// The requested order of object creation is not supported.
codes.set(-2146435038, 'SCARD_E_UNSUPPORTED_FEATURE');// This smart card does not support the requested feature.
codes.set(-2146435037, 'SCARD_E_DIR_NOT_FOUND');// The identified directory does not exist in the smart card.
codes.set(-2146435036, 'SCARD_E_FILE_NOT_FOUND');// The identified file does not exist in the smart card.
codes.set(-2146435035, 'SCARD_E_NO_DIR');// The supplied path does not represent a smart card directory.
codes.set(-2146435034, 'SCARD_E_NO_FILE');// The supplied path does not represent a smart card file.
codes.set(-2146435033, 'SCARD_E_NO_ACCESS');// Access is denied to this file.
codes.set(-2146435032, 'SCARD_E_WRITE_TOO_MANY');// The smartcard does not have enough memory to store the information.
codes.set(-2146435031, 'SCARD_E_BAD_SEEK');// There was an error trying to set the smart card file object pointer.
codes.set(-2146435030, 'SCARD_E_INVALID_CHV');// The supplied PIN is incorrect.
codes.set(-2146435029, 'SCARD_E_UNKNOWN_RES_MNG');// An unrecognized error code was returned from a layered component.
codes.set(-2146435028, 'SCARD_E_NO_SUCH_CERTIFICATE');// The requested certificate does not exist.
codes.set(-2146435027, 'SCARD_E_CERTIFICATE_UNAVAILABLE');// The requested certificate could not be obtained.
codes.set(-2146435026, 'SCARD_E_NO_READERS_AVAILABLE');// Cannot find a smart card reader.
codes.set(-2146435025, 'SCARD_E_COMM_DATA_LOST');// A communications error with the smart card has been detected.Retry the operation.
codes.set(-2146435024, 'SCARD_E_NO_KEY_CONTAINER');// The requested key container does not exist on the smart card.
codes.set(-2146435023, 'SCARD_E_SERVER_TOO_BUSY');// The Smart card resource manager is too busy to complete this operation.

codes.set(-2146434971, 'SCARD_W_UNSUPPORTED_CARD');// The reader cannot communicate with the card, due to ATR string configuration conflicts.
codes.set(-2146434970, 'SCARD_W_UNRESPONSIVE_CARD'); // these are about the nfc tag
codes.set(-2146434969, 'SCARD_W_UNPOWERED_CARD');// Power has been removed from the smart card, so that further communication is not possible.
codes.set(-2146434968, 'SCARD_W_RESET_CARD');// The smart card has been reset, so any shared state information is invalid.
codes.set(-2146434967, 'SCARD_W_REMOVED_CARD'); // normal "idle" code. No card on reader
codes.set(-2146434966, 'SCARD_W_SECURITY_VIOLATION');// Access was denied because of a security violation.
codes.set(-2146434965, 'SCARD_W_WRONG_CHV');// The card cannot be accessed because the wrong PIN was presented.
codes.set(-2146434964, 'SCARD_W_CHV_BLOCKED');// The card cannot be accessed because the maximum number of PIN entry attempts has been reached.
codes.set(-2146434963, 'SCARD_W_EOF');// The end of the smart card file has been reached.
codes.set(-2146434962, 'SCARD_W_CANCELLED_BY_USER');// The action was canceled by the user.
codes.set(-2146434961, 'SCARD_W_CARD_NOT_AUTHENTICATED');// No PIN was presented to the Smart card.

module.exports = codes;