export default function heroHealth(params) {
    let scale = '';
    if (params.health >= 50) {
        scale = 'healthy';
    } if (params.health < 50 && params.health >=15) {
        scale = 'wounded';
    } if (params.health < 15) {
        scale = 'critical';
    }
    return scale;
};