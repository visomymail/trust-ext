import _auth from './actions/auth';
import _upMail from './actions/up-mail';

export namespace Mail {
    export const auth = _auth;
    export const upMail = _upMail;
};