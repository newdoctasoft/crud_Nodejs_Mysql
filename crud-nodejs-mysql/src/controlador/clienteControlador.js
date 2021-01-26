const controlador = {};


controlador.mostrarFormulario = (req, res) => { 
       res.render('formulario');
  };

controlador.listar = (req, res) => {
  req.getConnection((error, conexion) => {
    conexion.query('SELECT * FROM cliente', (error, clientes) => {
     if (error) {
      res.json(error);
     }
      
     res.render('listar', {
        clientes: clientes
     }); 
    });
  });
};

controlador.insertar = (req, res) => {
  const datos = req.body;
  console.log(req.body)
  req.getConnection((error, conexion) => {
    const query = conexion.query('INSERT INTO cliente set ?', datos, (error, cliente) => {
      console.log(cliente)
      res.redirect('/');
    })
  })
};
 

controlador.buscar = (req, res) => {
    const { id } = req.params;
    req.getConnection((error, conexion) => {
        conexion.query("SELECT * FROM cliente WHERE id = ?", [id], (error, filas) => {
        res.render('editar', {
          resultado: filas[0]
        })
      });
    });
  };

 
  controlador.editar = (req, res) => {
    const { id } = req.params;
    const nuevoCliente = req.body;
    req.getConnection((error, conexion) => {
  
        conexion.query('UPDATE cliente set ? where id = ?', [nuevoCliente, id], (error, filas) => {
      res.redirect('/');
    });
    });
  };
 
  
controlador.eliminar = (req, res) => {
    const { id } = req.params;
    req.getConnection((error, conexion) => {
        conexion.query('DELETE FROM cliente WHERE id = ?', [id], (error, filas) => {
        res.redirect('/');
      });
    });
  }

 
module.exports = controlador;
