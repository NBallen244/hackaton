const BarraGeneracion = ({ includeUppercase, includeNumbers, includeSymbols, includeLowercase }:{ includeUppercase: boolean, includeNumbers: boolean, includeSymbols: boolean, includeLowercase: boolean }) => {
  let characters = 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) characters += '0123456789';
    if (includeSymbols) characters += '!@#$%^&*()_+[]{}|;:,.<>?';
};

export default BarraGeneracion;