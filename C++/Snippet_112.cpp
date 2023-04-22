// Nesting "if Statements" is Bad
void anyFunction() {
    if (wifi) {
        if (login) {
            if (admin) {
                seeAdminPanel();
            }
            else {
                debugPrint('must be an admin');
            }
        }
        else {
            debugPrint('must login');
        }
    }
    else {
        debugPrint('must be connected');
    }
}

// doing this is easier to read
void anyFunction2() {
    if (!wifi) {
        debugPrint('must be connected');
        return;
    }
    if (!login) {
        debugPrint('must login');
        return;
    }
    if (!admin) {
        debugPrint('must be an admin');
        return;
    }
    seeAdminPanel();
}
