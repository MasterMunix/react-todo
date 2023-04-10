export function Footer({ footerData }) {


    return (
        <>
            <div className="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" style={{ position: "fixed", bottom: 0, width: "80%" }}>
                    <div class=" col-auto d-flex align-items-center">
                        {/* <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
                        </a> */}
                        <span class="mb-3 mb-md-0 text-muted">© 2023 {footerData}</span>
                    </div>
                </footer>
            </div>
        </>
    );
}