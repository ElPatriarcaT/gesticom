moduloDirectivas.component('menuperfil', {
    templateUrl: "js/system/component/menuperfil/menuperfil.html",
    controllerAs: 'mn',
    controller: menuperfilCtrl
});

function menuperfilCtrl(sessionService, $location, serverCallService) {
    var self = this;
    self.session_info = sessionService.getSessionInfo();
    self.isSessionActive = sessionService.isSessionActive();

    serverCallService.getAllObjectsMetaData().then(function (response) {
        if (response.status == 200) {
            if (response.data.status == 200) {
                self.status = null;
                self.meta = response.data.json;
            } else {
                self.status = "Error en la recepción de datos del servidor";
            }
        } else {
            self.status = "Error en la recepción de datos del servidor";
        }
    }).catch(function (data) {
        self.status = "Error en la recepción de datos del servidor";
    });

    self.isActive = function (viewLocation) {
        //return viewLocation === $location.path();
        return $location.path().startsWith(viewLocation);
    };
}
