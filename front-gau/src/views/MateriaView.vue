<template>
    <div>
        <div class="header">
            <nav class="navbar navbar-expand-lg">
                <div class="encabezado container-fluid">
                <a class="logo navbar-brand" href="#">
                    <img src="@/assets/logoGAU.png" width="75" height="75">
                </a>
                <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
                    <div class="salir">
                    <img src="@/assets/salir.png">
                    </div>
                    <div class="salir">
                    <p>Salir</p>
                    </div>
                </div>
                </div>
            </nav>
        </div>

        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>

    </div>
</template>