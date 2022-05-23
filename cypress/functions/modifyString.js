// Removes a character from a string
export default function removeChar(str, char) {
    return str.split(char).join("");
}