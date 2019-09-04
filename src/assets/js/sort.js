export default function sortReps(a, b, fieldName, direction) {
    if (direction != null && fieldName != null) {
        direction = direction == 1 ? 1 : -1;
        
        var firstValue = typeof(a[fieldName]) == "string" ? a[fieldName].toLowerCase() : a[fieldName];
        var secondValue = typeof(b[fieldName]) == "string" ? b[fieldName].toLowerCase() : b[fieldName];

        if (firstValue > secondValue) {
            return 1 * direction;
        } else if (firstValue < secondValue) {
            return -1 * direction;
        } else {
            return 0;
        }
        
    }
    return 0;
}