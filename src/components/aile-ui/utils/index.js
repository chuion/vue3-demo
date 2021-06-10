export function checkType(data) {
    const type = Object.prototype.toString.call(data);
    return type.slice(8, -1).toLowerCase();
}

export function isEmpty(data) {
    const dataType = checkType(data);
    switch (dataType) {
        case "array":
            return !data.length;
        case 'object':
            return !Object.keys(data).length;
        case 'map':
        case 'set':
            return !data.size;
        case 'boolean':
        case 'number':
        case 'symbol':
        case 'function':
            return false;
        default:
            return !data;
    }
}