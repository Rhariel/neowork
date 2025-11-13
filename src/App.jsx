import React, { useEffect, useState } from 'react'
import profiles from './data/profiles.json'

function Avatar({ src, name }) {
  return <img src={src} alt={name} className="w-16 h-16 rounded-full object-cover" />
}

function Modal({ open, onClose, profile, onRecommend, onMessage }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-[var(--card)] rounded-2xl p-6 w-full max-w-2xl shadow-xl">
        <div className="flex gap-4">
          <Avatar src={profile.foto} name={profile.nome} />
          <div>
            <h2 className="text-xl font-semibold">{profile.nome}</h2>
            <p className="text-sm text-[var(--muted)]">{profile.cargo}</p>
            <p className="mt-3 text-sm">{profile.resumo}</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Experiências</h3>
            {profile.experiencias.map((e, i) => (
              <div key={i} className="text-sm mt-2">
                <div>{e.cargo} · {e.empresa}</div>
                <div className="text-[var(--muted)] text-xs">{e.inicio} — {e.fim}</div>
                <div>{e.descricao}</div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="font-semibold">Formação</h3>
            {profile.formacao.map((f, i) => (
              <div key={i} className="text-sm mt-2">
                <div>{f.curso} · {f.instituicao}</div>
                <div className="text-[var(--muted)] text-xs">{f.ano}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 flex gap-3 justify-end">
          <button onClick={onRecommend} className="px-4 py-2 bg-[var(--accent)] rounded-xl">
            Recomendar profissional
          </button>
          <button onClick={onMessage} className="px-4 py-2 border rounded-xl">
            Enviar mensagem
          </button>
          <button onClick={onClose} className="px-3 py-2 text-sm">
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}

function Card({ p, onClick }) {
  return (
    <div
      onClick={() => onClick(p)}
      className="bg-[var(--card)] rounded-2xl p-4 cursor-pointer hover:shadow-lg transition-transform hover:-translate-y-1"
    >
      <div className="flex items-center gap-4">
        <Avatar src={p.foto} name={p.nome} />
        <div>
          <div className="font-semibold">{p.nome}</div>
          <div className="text-[var(--muted)] text-sm">{p.cargo}</div>
        </div>
      </div>
      <div className="mt-3 text-sm text-[var(--muted)]">{p.resumo}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.habilidadesTecnicas.slice(0, 5).map((h, i) => (
          <span key={i} className="px-2 py-1 text-xs rounded-lg border">{h}</span>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [q, setQ] = useState('')
  const [area, setArea] = useState('')
  const [city, setCity] = useState('')
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [sel, setSel] = useState(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const areas = Array.from(new Set(profiles.map(p => p.area))).sort()
  const cities = Array.from(new Set(profiles.map(p => p.localizacao))).sort()

  const handleOpen = (p) => { setSel(p); setOpen(true) }
  const handleClose = () => setOpen(false)

  const handleRecommend = () => {
    alert('Recomendado com sucesso')
    handleClose()
  }

  const handleMessage = () => {
    const text = prompt('Digite a mensagem para ' + sel.nome)
    if (text) {
      alert('Mensagem enviada para ' + sel.nome)
      handleClose()
    }
  }

  const filtered = profiles.filter(p => {
    if (q && !(p.nome.toLowerCase().includes(q.toLowerCase()) || p.habilidadesTecnicas.join(' ').toLowerCase().includes(q.toLowerCase()))) return false
    if (area && p.area !== area) return false
    if (city && p.localizacao !== city) return false
    return true
  })

  return (
    <div className="min-h-screen p-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Neowork</h1>
        <div className="flex gap-3 items-center">
          <input placeholder="Pesquisar nome ou skill" value={q} onChange={e => setQ(e.target.value)} className="px-3 py-2 rounded-xl bg-transparent border" />
          <select value={area} onChange={e => setArea(e.target.value)} className="px-3 py-2 rounded-xl bg-transparent border">
            <option value="">Área</option>
            {areas.map((a, i) => <option key={i} value={a}>{a}</option>)}
          </select>
          <select value={city} onChange={e => setCity(e.target.value)} className="px-3 py-2 rounded-xl bg-transparent border">
            <option value="">Cidade</option>
            {cities.map((c, i) => <option key={i} value={c}>{c}</option>)}
          </select>
          <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} className="px-3 py-2 rounded-xl border">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </header>
      <main className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(p => <Card key={p.id} p={p} onClick={handleOpen} />)}
      </main>
      {sel && <Modal open={open} onClose={handleClose} profile={sel} onRecommend={handleRecommend} onMessage={handleMessage} />}
    </div>
  )
}
