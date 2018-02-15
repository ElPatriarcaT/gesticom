/*
 * Copyright (c) 2017-2018 
 *
 * by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com) & DAW students
 * 
 * GESANE: Free Open Source Health Management System
 *
 * Sources at:
 *                            https://github.com/rafaelaznar/gesane-server
 *                            https://github.com/rafaelaznar/gesane-client
 *                            https://github.com/rafaelaznar/gesane-database
 *
 * GESANE is distributed under the MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var anyAuthenticationPromise = function (sessionService) {
    return sessionService.anyAuthenticationPromise();
};
var authenticationAdministratorPromise = function (sessionService) {
    return sessionService.authenticationPromise(1);
};
var authenticationFalleroPromise = function (sessionService) {
    return sessionService.authenticationPromise(2);
};
var authenticationVisitantePromise = function (sessionService) {
    return sessionService.authenticationPromise(3);
};


trolleyes.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'js/system/shared/login.html', controller: 'LoginController', resolve: {auth: anyAuthenticationPromise}});
        //------------
        $routeProvider.when('/home', {templateUrl: 'js/system/shared/home.html', controller: 'HomeController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/profile', {templateUrl: 'js/system/shared/profile.html', controller: 'ProfileController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/logout', {templateUrl: 'js/system/shared/logout.html', controller: 'LogoutController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/home', {templateUrl: 'js/system/shared/home.html', controller: 'HomeController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/license', {templateUrl: 'js/system/shared/license.html', controller: 'LicenseController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/passchange', {templateUrl: 'js/system/shared/passchange.html', controller: 'PasschangeController', resolve: {auth: anyAuthenticationPromise}});

        //------------ Usuario 1
        $routeProvider.when('/usuario/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'UsuarioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'UsuarioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/newalumno/9/:codigo', {templateUrl: 'js/app/usuario/9/newalumno.html', controller: 'UsuarioNewalumno9Controller', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/usuario/1/tipousuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioXtipousuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/tipousuario/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioXtipousuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/tipousuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioXtipousuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------ Usuario 2
        $routeProvider.when('/usuario/2/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'UsuarioView2Controller', resolve: {auth: authenticationFalleroPromise}});
        $routeProvider.when('/usuario/2/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioNew2Controller', resolve: {auth: authenticationFalleroPromise}});
        $routeProvider.when('/usuario/2/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioEdit2Controller', resolve: {auth: authenticationFalleroPromise}});
        $routeProvider.when('/usuario/2/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioPList2Controller', resolve: {auth: authenticationFalleroPromise}});
        
        //------------ TipoUsuario 1
        $routeProvider.when('/tipousuario/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipousuarioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipousuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipousuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TipousuarioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipousuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------ TipoUsuario 2
        $routeProvider.when('/tipousuario/2/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipousuarioView2Controller', resolve: {auth: authenticationFalleroPromise}});
               
        //----------- Censo 1
        $routeProvider.when('/censo/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CensoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/censo/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CensoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/censo/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CensoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/censo/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'CensoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/censo/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'CensoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------ Usuario 2
        $routeProvider.when('/censo/2/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CensoView2Controller', resolve: {auth: authenticationFalleroPromise}});
        $routeProvider.when('/censo/2/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CensoNew2Controller', resolve: {auth: authenticationFalleroPromise}});
        $routeProvider.when('/censo/2/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CensoEdit2Controller', resolve: {auth: authenticationFalleroPromise}});
        $routeProvider.when('/censo/2/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'CensoPList2Controller', resolve: {auth: authenticationFalleroPromise}});
        
        //----------- Cargo 1
        $routeProvider.when('/cargo/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CargoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cargo/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CargoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cargo/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CargoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cargo/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'CargoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cargo/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'CargoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});

        //----------- Comision 1
        $routeProvider.when('/comision/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ComisionView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comision/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ComisionNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comision/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ComisionEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comision/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ComisionRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comision/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ComisionPList1Controller', resolve: {auth: authenticationAdministratorPromise}});

        //----------- Cuotas 1
        $routeProvider.when('/cuotas/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'CuotasView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cuotas/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CuotasNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cuotas/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'CuotasEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cuotas/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'CuotasRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cuotas/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'CuotasPList1Controller', resolve: {auth: authenticationAdministratorPromise}});

        //----------- Ejercicio 1
        $routeProvider.when('/ejercicio/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'EjercicioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/ejercicio/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'EjercicioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/ejercicio/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'EjercicioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/ejercicio/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'EjercicioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/ejercicio/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'EjercicioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});

        //----------- Eventos 1
        $routeProvider.when('/eventos/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'EventosView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/eventos/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'EventosNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/eventos/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'EventosEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/eventos/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'EventosRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/eventos/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/blog.html', controller: 'EventosPList1Controller', resolve: {auth: authenticationAdministratorPromise}});

        //----------- Recompensa 1
        $routeProvider.when('/recompensa/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'RecompensaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/recompensa/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'RecompensaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/recompensa/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'RecompensaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/recompensa/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'RecompensaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/recompensa/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'RecompensaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});

        $routeProvider.otherwise({redirectTo: '/'});
    }]);
