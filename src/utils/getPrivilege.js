export const getPrivilege = () => {
    const privilege = localStorage.getItem('who');
    return privilege;
}