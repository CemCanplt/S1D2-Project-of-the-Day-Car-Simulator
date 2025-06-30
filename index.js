const simulator = carSimulator('Toyota', 'Corolla', 40000, 1200000);

function carSimulator(marka, model, kilometre, fiyat) {
  const arabaOlustur = {
    marka: marka,
    model: model,
    kilometre: kilometre,
    fiyat: fiyat,
    depo: 50,
    getPrice: function () {
      return `Arabanın güncel piyasa değeri ${this.fiyat} TL'dir.`;
    },
    refuel: function (benzin = 0) {
      if (this.depo + benzin <= 100) {
        this.depo += benzin;
        return `Depo %${this.depo} doludur.`;
      } else if (this.depo + benzin > 100) {
        this.depo = 100;
        return `Depo %${this.depo} doludur.`;
      }
    },
    drive: function (km) {
      this.kilometre += Math.floor(km);
      this.depo = this.depo - (km / 100) * 5;
      this.fiyat -= (km / 100) * 50;
      return `Arabanın güncel kilometresi: ${this.kilometresi}`;
    },
  };
  return arabaOlustur;
}

console.log(simulator.getPrice());

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = carSimulator;
