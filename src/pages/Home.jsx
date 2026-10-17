import React, { useState } from 'react';
import { Database, Plus, Layers, Sparkles, CheckCircle2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function Home() {
  const [records, setRecords] = useState([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleAddRecord = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const item = {
      id: crypto.randomUUID(),
      title: newTitle.trim(),
      category: newCategory.trim() || 'general',
      description: newDescription.trim(),
      status: 'active',
      created_date: new Date().toISOString(),
    };
    setRecords((prev) => [item, ...prev]);
    setNewTitle('');
    setNewCategory('');
    setNewDescription('');
    setIsAddOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between relative overflow-hidden">
      {/* Subtle architectural grid lines */}
      <div
        className="pointer-events-none fixed inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Top Header Bar */}
      <header className="relative z-10 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Database className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2.5">
              <span className="font-heading font-semibold tracking-tight text-sm">
                Starter Workspace
              </span>
              <span className="font-mono text-[11px] text-muted-foreground px-2 py-0.5 rounded bg-secondary border border-border">
                db:connected
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              {records.length} {records.length === 1 ? 'record' : 'records'}
            </span>
            <Button
              size="sm"
              onClick={() => setIsAddOpen(true)}
              className="gap-1.5 font-medium"
            >
              <Plus className="w-4 h-4" />
              New Record
            </Button>
          </div>
        </div>
      </header>

      {/* Main Canvas Area */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-6 py-12 flex flex-col justify-center">
        {records.length === 0 ? (
          <div className="border border-dashed border-border bg-card/70 backdrop-blur-sm rounded-lg p-8 sm:p-16 text-center max-w-2xl mx-auto w-full relative">
            <span className="font-mono text-[10px] text-muted-foreground/70 absolute top-3 left-4">
              [x:0, y:0]
            </span>
            <span className="font-mono text-[10px] text-muted-foreground/70 absolute top-3 right-4">
              TABLE: Record
            </span>

            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mx-auto mb-6">
              <Layers className="w-5 h-5" />
            </div>

            <h1 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
              Blank Database & Starter Canvas
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
              Your database is initialized and empty. Add your first record below to test the connection, or tell the builder what sections and data tables you want to create next.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button onClick={() => setIsAddOpen(true)} className="gap-2">
                <Plus className="w-4 h-4" />
                Add First Record
              </Button>
            </div>

            <div className="mt-10 pt-6 border-t border-border/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-3 rounded bg-background/60 border border-border/60">
                <div className="font-mono text-[11px] text-primary mb-1">01 / ENTITY</div>
                <div className="text-xs font-medium">Record Table Ready</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">
                  title, category, status, description, data
                </div>
              </div>
              <div className="p-3 rounded bg-background/60 border border-border/60">
                <div className="font-mono text-[11px] text-primary mb-1">02 / CANVAS</div>
                <div className="text-xs font-medium">Clean Foundation</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">
                  Zero clutter, ready for custom pages
                </div>
              </div>
              <div className="p-3 rounded bg-background/60 border border-border/60">
                <div className="font-mono text-[11px] text-primary mb-1">03 / EXPAND</div>
                <div className="text-xs font-medium">Schema on Demand</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">
                  Add any new fields or tables anytime
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-heading text-xl font-semibold tracking-tight">
                  Database Records
                </h1>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  Showing {records.length} stored {records.length === 1 ? 'item' : 'items'}
                </p>
              </div>
              <Button size="sm" onClick={() => setIsAddOpen(true)} className="gap-1.5">
                <Plus className="w-4 h-4" />
                Add Record
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {records.map((rec) => (
                <div
                  key={rec.id}
                  className="bg-card border border-border rounded-lg p-5 flex flex-col justify-between hover:border-primary/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <Badge variant="secondary" className="font-mono text-[11px]">
                        {rec.category || 'general'}
                      </Badge>
                      <button
                        onClick={() =>
                          setRecords((prev) => prev.filter((item) => item.id !== rec.id))
                        }
                        className="text-muted-foreground hover:text-destructive transition-colors p-1"
                        title="Delete record"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <h3 className="font-heading font-medium text-base mb-1">{rec.title}</h3>
                    {rec.description && (
                      <p className="text-xs text-muted-foreground line-clamp-3">
                        {rec.description}
                      </p>
                    )}
                  </div>
                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                    <span>status: {rec.status}</span>
                    <span>id: {rec.id.slice(0, 6)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Dialog for adding a record */}
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>New Database Record</DialogTitle>
            <DialogDescription>
              Add an item to your starter database table.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAddRecord} className="space-y-4 py-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium">Title *</label>
              <Input
                placeholder="e.g., First Item"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium">Category</label>
              <Input
                placeholder="e.g., general, page, product"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium">Notes / Description</label>
              <Input
                placeholder="Optional details..."
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </div>
            <DialogFooter className="pt-2">
              <Button type="button" variant="outline" onClick={() => setIsAddOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Save Record</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
            <span>SYSTEM READY</span>
          </div>
          <div>RECORDS: {records.length}</div>
        </div>
      </footer>
    </div>
  );
}